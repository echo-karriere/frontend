import { Box, Container, Typography } from "@material-ui/core";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

const link = createHttpLink({
  uri: "http://localhost:8080/graphql",
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
  return (
    <div>
      <p>Hello!</p>
      <button onClick={() => console.log("click")}>Login</button>
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
