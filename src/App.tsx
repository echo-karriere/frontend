import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Footer } from "./Footer";
import SignIn from "./Login";
import { useStyles } from "./styles";
import Dashboard from "./views/dashboard/Dashboard";
import { useSelector } from "react-redux";
import { RootState } from "./rootReducer";

function App() {
  const classes = useStyles();
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route path="/login">
            <Container component="main" className={classes.main} maxWidth="sm">
              <SignIn />
            </Container>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Redirect from="/" to={auth.authenticated ? "/dashboard" : "/login"} />
        </Switch>
        <Footer />
      </div>
      <div className={classes.dashboard} />
    </Router>
  );
}

export default App;
