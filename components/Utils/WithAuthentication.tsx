import React, { ReactElement } from "react";
import { useSession } from "next-auth/client";
import { Spinner } from "../Generic";
import { useRouter } from "next/router";

export function withAuthentication<P = never>(Component: (props: P) => ReactElement<P>): (props: P) => JSX.Element {
  // eslint-disable-next-line react/display-name
  return (props: P) => {
    const [session, loading] = useSession();
    const router = useRouter();

    if (loading) return <Spinner />;

    if (!loading && !session) {
      void router.push("/");
      return <Spinner />;
    }

    return <Component {...props} />;
  };
}
