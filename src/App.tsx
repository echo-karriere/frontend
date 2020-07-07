import { Box, Container, Typography } from "@material-ui/core";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import gql from "graphql-tag";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { useLoginMutationMutation } from "./generated/graphql";

export const login = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`;

const link = createHttpLink({
  uri: "http://localhost:3000/graphql",
});

const authLink = setContext((_, { headers }: { headers: object }) => {
  const token = localStorage.getItem("accessToken");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});

const LogIn: React.FC = () => {
  const [loginMutation, { data, error, loading }] = useLoginMutationMutation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  console.log(JSON.stringify(data, null, 2));
  console.log(JSON.stringify(loginMutation, null, 2));

  return (
    <div>
      <p>Hello!</p>
      <button
        onClick={async () =>
          await loginMutation({
            variables: {
              email: "test@example.org",
              password: "password123",
            },
          })
        }
      >
        Login
      </button>
    </div>
  );
};

function App() {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Container maxWidth="sm">
            <Box my={4}>
              <Typography variant="h4" component="h1" gutterBottom>
                Hello, world!
              </Typography>
              <LogIn />
            </Box>
          </Container>
        </ApolloHooksProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
}

export default App;
