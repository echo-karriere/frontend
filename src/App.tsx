import { Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Dashboard } from "./views/Dashboard";
import { UserSettings } from "./views/settings/UserSettings";
import { AddCompanyForm } from "./components/AddCompanyForm";
import { Landing } from "./views/Landing";
import { useAuth0 } from "@auth0/auth0-react";
import { ProtectedRoute } from "./utils";
import { Spinner } from "./components";

export const history = createBrowserHistory();

export const App = (): JSX.Element => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Spinner />;

  return (
    <Switch>
      <Route path="/" exact>
        {isAuthenticated ? <Redirect to="/dashboard" /> : <Landing />}
      </Route>
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <Route path="/addCompany">
        <AddCompanyForm />
      </Route>
      <Route path="/settings">
        <UserSettings />
      </Route>
    </Switch>
  );
};
