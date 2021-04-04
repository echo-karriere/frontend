import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./Footer";
import { useStyles } from "./styles";
import { Dashboard } from "./views/dashboard/Dashboard";
import { UserSettings } from "./views/settings/UserSettings";
import { AddCompanyForm } from "./components/AddCompanyForm";

export const App = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route path="/login">
            <Container component="main" className={classes.main} maxWidth="sm">
              <p>Login</p>
            </Container>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/addCompany">
            <AddCompanyForm />
          </Route>
          <Route path="/settings">
            <UserSettings />
          </Route>
        </Switch>
        <Footer />
      </div>
      <div className={classes.dashboard} />
    </Router>
  );
};
