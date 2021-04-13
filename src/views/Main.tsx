import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { Dashboard } from "./Dashboard";
import { Landing } from "./Landing";
import { Spinner } from "../components";
import { InteractionStatus } from "@azure/msal-browser";

export const Main = (): JSX.Element => {
  const { inProgress } = useMsal();

  if (
    inProgress === InteractionStatus.Login ||
    inProgress === InteractionStatus.Startup ||
    inProgress === InteractionStatus.HandleRedirect
  )
    return <Spinner />;

  return (
    <>
      <AuthenticatedTemplate>
        <Dashboard />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Landing />
      </UnauthenticatedTemplate>
    </>
  );
};
