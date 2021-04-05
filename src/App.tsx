import { Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Dashboard } from "./views/Dashboard";
import { UserSettings } from "./views/settings/UserSettings";
import { Landing } from "./views/Landing";
import { useAuth0 } from "@auth0/auth0-react";
import { ProtectedRoute } from "./utils";
import { Spinner } from "./components";
import { CompanyOverview, CreateCompany } from "./views/companies/";
import { Tokens } from "./views/settings/Tokens";

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
      <Route
        path="/settings"
        render={({ match: { url } }: { match: { url: string } }) => (
          <>
            <ProtectedRoute path={`${url}/user`} component={UserSettings} />
            <ProtectedRoute path={`${url}/tokens`} component={Tokens} />
          </>
        )}
      />
      <Route
        path="/companies"
        render={({ match: { url } }: { match: { url: string } }) => (
          <>
            <ProtectedRoute path={`${url}/`} exact component={CompanyOverview} />
            <ProtectedRoute path={`${url}/create`} component={CreateCompany} />
          </>
        )}
      />
    </Switch>
  );
};
