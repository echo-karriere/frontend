import { PropsWithChildren } from "react";
import { Redirect } from "react-router-dom";

export default function AuthGuard({ children }: PropsWithChildren<any>) {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <>{children}</>;
}
