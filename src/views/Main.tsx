import { Dashboard } from "./Dashboard";
import { Landing } from "./Landing";
import { Spinner } from "../components";
import { useAuth } from "../auth";

export const Main = (): JSX.Element => {
  const { state } = useAuth();

  if (state.loading) return <Spinner />;

  return state.authenticated ? <Dashboard /> : <Landing />;
};
