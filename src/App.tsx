import { Route, Switch, useHistory } from "react-router-dom";
import { UserSettings } from "./views/settings/UserSettings";
import { CustomNavigationClient } from "./utils";
import { CompanyOverview, CreateCompany } from "./views/companies/";
import { Tokens } from "./views/settings/Tokens";
import { JobsOverview, CreateJob } from "./views/jobs";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { Main } from "./views/Main";
import { ApolloApp } from "./Apollo";
import { AuthProvider } from "./components/Auth";

export interface AppProps {
  pca: PublicClientApplication;
}

export const App = ({ pca }: AppProps): JSX.Element => {
  const history = useHistory();
  const navigationClient = new CustomNavigationClient(history);
  pca.setNavigationClient(navigationClient);

  return (
    <MsalProvider instance={pca}>
      <ApolloApp>
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route
              path="/settings"
              render={({ match: { url } }: { match: { url: string } }) => (
                <>
                  <Route path={`${url}/user`} component={UserSettings} />
                  <Route path={`${url}/tokens`} component={Tokens} />
                </>
              )}
            />
            <Route
              path="/companies"
              render={({ match: { url } }: { match: { url: string } }) => (
                <>
                  <Route path={`${url}/`} exact component={CompanyOverview} />
                  <Route path={`${url}/create`} component={CreateCompany} />
                </>
              )}
            />
            <Route
              path="/jobs"
              render={({ match: { url } }: { match: { url: string } }) => (
                <>
                  <Route path={`${url}/`} exact component={JobsOverview} />
                  <Route path={`${url}/create`} component={CreateJob} />
                </>
              )}
            />
          </Switch>
        </AuthProvider>
      </ApolloApp>
    </MsalProvider>
  );
};
