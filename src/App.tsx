import { Container, Typography } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./Footer";
import SignIn from "./Login";
import { useStyles } from "./styles";
import Dashboard from "./views/dashboard/Dashboard";

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
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route path="/login">
            <Container component="main" className={classes.main} maxWidth="sm">
              <SignIn />
            </Container>
          </Route>
          <Route exact path="/">
            <Container component="main" className={classes.main} maxWidth="sm">
              <Main />
            </Container>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </div>
      <div className={classes.dashboard}></div>
    </Router>
  );
}

export default App;
