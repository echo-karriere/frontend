import { Dashboard } from "./Dashboard";
import { Landing } from "./Landing";
import { authenticated } from "../auth/Keycloak";

export const Main = (): JSX.Element => {
  console.log(authenticated);
  return authenticated ? <Dashboard /> : <Landing />;
};
