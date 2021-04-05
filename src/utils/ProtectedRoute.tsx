import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Route } from "react-router-dom";
import { Spinner } from "../components";

// NOTE: Code directly from Auth0 guide on authentication, sadly with poor typings :(

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ProtectedRoute = ({ component, ...args }: React.PropsWithChildren<any>): JSX.Element => (
  <Route
    component={withAuthenticationRequired(component, {
      // eslint-disable-next-line react/display-name
      onRedirecting: () => <Spinner />,
    })}
    {...args}
  />
);
