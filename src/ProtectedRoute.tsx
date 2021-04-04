import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Route } from "react-router-dom";

export const ProtectedRoute = ({
  component,
  ...args
}: React.PropsWithChildren<{ [key: string]: never }>): JSX.Element => (
  <Route
    render={(props) => {
      const Component = withAuthenticationRequired(component, {});
      return <Component {...props} />;
    }}
    {...args}
  />
);
