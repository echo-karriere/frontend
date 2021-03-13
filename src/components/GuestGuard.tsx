import { Redirect } from "react-router-dom";
import { PropsWithChildren } from "react";
import { parse } from "query-string";

export default function GuestGuard({ children }: PropsWithChildren<any>) {
  const isAuthenticated = true; //useAuth(); - Add this when auth hook is up and running

  const {
    location: { search },
  } = children.props.children.props;
  const parsed = parse(search);

  if (isAuthenticated) {
    if (parsed.backurl) {
      return <Redirect to="/dashboard" />;
    }
    return <Redirect to="/account" />;
  }

  return <>{children}</>;
}
