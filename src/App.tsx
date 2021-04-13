import { Route, Switch } from "react-router-dom";
import { UserSettings } from "./views/settings/UserSettings";
import { CompanyOverview, CreateCompany } from "./views/companies/";
import { Tokens } from "./views/settings/Tokens";
import { JobsOverview, CreateJob } from "./views/jobs";
import { Main } from "./views/Main";

export const App = (): JSX.Element => {
  return (
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
  );
};
