import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const link = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }: { headers: Record<string, string> }) => {
  const token = "";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer blah` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});
