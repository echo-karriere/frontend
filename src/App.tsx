import { Container, Typography } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./Footer";
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
    <Router>
      <div className={classes.root}>
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
