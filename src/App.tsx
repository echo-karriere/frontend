import { ApolloProvider } from "@apollo/client";
import { Container, CssBaseline, Typography } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { apolloClient } from "./Apollo";
import { Copyright } from "./Copyright";
import SignIn from "./Login";
import { useStyles } from "./styles";

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
