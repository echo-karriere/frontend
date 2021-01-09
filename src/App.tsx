import { Container, Typography } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Footer } from "./Footer";
import SignIn from "./Login";
import { useStyles } from "./styles";
import Dashboard from "./views/dashboard/Dashboard";
import { useSelector } from "react-redux";
import { RootState } from "./rootReducer";

const Landing: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth);
  console.log(auth.authenticated);
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        <Redirect from="/" to={auth.authenticated ? "/dashboard" : "/login"} />
      </Typography>
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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Container component="main" className={classes.main} maxWidth="sm">
              <Landing />
            </Container>
          </Route>
        </Switch>
        <Footer />
      </div>
      <div className={classes.dashboard} />
    </Router>
  );
}

export default App;
