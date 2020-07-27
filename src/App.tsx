import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import { useLoginMutation } from "./generated/graphql";

const link = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }: { headers: object }) => {
  let token;
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
  const [login, { data, loading, error }] = useLoginMutation();

  if (loading) return <p>Logging in...</p>;
  if (error) return <p>Something went wrong</p>;
  if (data) console.log(data);

  return (
    <div>
      <p>Hello!</p>
      <button
        onClick={async () => {
          await login({
            variables: {
              email: "what@test.com",
              password: "qwerty",
            },
          });
        }}
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
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Hello, world!
            </Typography>
            <LogIn />
          </Box>
        </Container>
      </ApolloProvider>
    </React.StrictMode>
  );
}

export default App;
