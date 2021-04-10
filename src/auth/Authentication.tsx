import { KeycloakContext } from "./KeycloakContext";
import { ReactNode, useEffect, useState } from "react";
import { Spinner } from "../components";
import Keycloak, { KeycloakInstance } from "keycloak-js";

interface AuthenticationProps {
  children: ReactNode;
}

export const Authentication = ({ children }: AuthenticationProps): JSX.Element => {
  const [keycloak, setKeycloak] = useState<KeycloakInstance | undefined>(undefined);

  useEffect(() => {
    void (async () => {
      const cloak = Keycloak();
      const auth = await cloak.init({
        pkceMethod: "S256",
        onLoad: "check-sso",
        silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
        flow: "standard",
        responseMode: "fragment",
        enableLogging: true,
      });

      if (!auth) await cloak.login({ redirectUri: window.location.href });
      else setKeycloak(cloak);
    })();
  }, []);

  if (keycloak !== undefined) return <KeycloakContext.Provider value={keycloak}>{children}</KeycloakContext.Provider>;

  return <Spinner />;
};
