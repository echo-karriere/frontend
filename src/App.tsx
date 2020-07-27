import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Container, CssBaseline, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useLoginMutation } from "./generated/graphql";
import { Copyright } from "./Copyright";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: theme.palette.type === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));
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
  const classes = useStyles();

  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <div className={classes.root}>
          <CssBaseline />
          <Container component="main" className={classes.main} maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
              Hello, world!
            </Typography>
            <LogIn />
            <Typography variant="body1">Sticky footer placeholder.</Typography>
          </Container>
          <footer className={classes.footer}>
            <Container maxWidth="sm">
              <Typography variant="body1">My sticky footer can be found here.</Typography>
              <Copyright />
            </Container>
          </footer>
        </div>
      </ApolloProvider>
    </React.StrictMode>
  );
}

export default App;
