import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { InteractionRequiredAuthError } from "@azure/msal-common";
import { useAccount, useMsal } from "@azure/msal-react";
import { ReactNode } from "react";

interface ApolloProps {
  children: ReactNode;
}

export const ApolloApp = ({ children }: ApolloProps): JSX.Element => {
  const { instance, accounts, inProgress } = useMsal();
  const account = useAccount(accounts[0] ?? {});

  const getAccessToken = async () => {
    if (account && inProgress === "none") {
      try {
        const result = await instance.acquireTokenSilent({
          scopes: [`https://${process.env.REACT_APP_AUTHORITY}.onmicrosoft.com/backend/${process.env.REACT_APP_SCOPE}`],
          account: account,
        });
        return result.accessToken;
      } catch (err) {
        if (err instanceof InteractionRequiredAuthError) {
          return instance.acquireTokenRedirect({
            scopes: [
              `https://${process.env.REACT_APP_AUTHORITY}.onmicrosoft.com/backend/${process.env.REACT_APP_SCOPE}`,
            ],
          });
        }

        return null;
      }
    }
  };

  const link = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL,
  });

  const authLink = setContext(async (_, { headers }: { headers: Record<string, string> }) => {
    const token = await getAccessToken();
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(link),
    connectToDevTools: process.env.NODE_ENV !== "production",
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
