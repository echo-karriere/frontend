import { IncomingMessage, ServerResponse } from "http";
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";
import { useMemo } from "react";
import { setContext } from "@apollo/client/link/context";

export type ResolverContext = {
  req?: IncomingMessage;
  res?: ServerResponse;
};

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;
let apolloToken: string;

async function checkToken() {
  if (typeof window === "undefined") {
    const res = await fetch("/api/token");

    if (res.ok) {
      const data = (await res.json()) as Record<string, string>;
      apolloToken = data.accessToken ?? null;
    }
  }
}

const authLink = setContext(async (_, { headers }: { headers: Record<string, never> }) => {
  await checkToken();

  return {
    headers: {
      ...headers,
      Authorization: apolloToken ? `Bearer ${apolloToken}` : "",
    },
  };
});

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.concat(
      new HttpLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
        credentials: "same-origin",
      }),
    ),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(
  initialState: NormalizedCacheObject | null = null,
): ApolloClient<NormalizedCacheObject> {
  const client = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = client.extract();
    const data = merge(initialState, existingCache, {
      arrayMerge: (dest: unknown[], src: unknown[]) => [
        ...src,
        ...dest.filter((d) => src.every((s) => !isEqual(d, s))),
      ],
    });

    client.cache.restore(data);
  }

  if (typeof window === "undefined") return client;
  if (!apolloClient) apolloClient = client;

  return client;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: { props: { [x: string]: NormalizedCacheObject } },
): { props: { [p: string]: NormalizedCacheObject } } {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(initialState: NormalizedCacheObject): ApolloClient<NormalizedCacheObject> {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}
