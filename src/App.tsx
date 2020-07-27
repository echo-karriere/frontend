import { ApolloProvider } from "@apollo/client";
import { Container, CssBaseline, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { apolloClient } from "./Apollo";
import { Copyright } from "./Copyright";
import SignIn from "./Login";

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

const Main: React.FC = () => {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Hello, world!
      </Typography>
      <Typography variant="body1">Sticky footer placeholder.</Typography>
    </>
  );
};

function App() {
  const classes = useStyles();

  return (
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <Router>
          <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
              <Switch>
                <Route path="/login">
                  <SignIn />
                </Route>
                <Route exact path="/">
                  <Main />
                </Route>
              </Switch>
            </Container>
            <footer className={classes.footer}>
              <Container maxWidth="sm">
                <Typography variant="body1">My sticky footer can be found here.</Typography>
                <Copyright />
              </Container>
            </footer>
          </div>
        </Router>
      </ApolloProvider>
    </React.StrictMode>
  );
}

export default App;
