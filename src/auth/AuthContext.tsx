import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Keycloak, { KeycloakInstance } from "keycloak-js";
import { Spinner } from "../components";

interface AuthType {
  keycloak: KeycloakInstance;
  loading: boolean;
}

export const AuthContext = createContext<AuthType | undefined>(undefined);

interface AuthProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProps): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [keycloak, setKeycloak] = useState<KeycloakInstance | undefined>(undefined);

  useEffect(() => {
    const cloak = Keycloak();
    void cloak
      .init({
        onLoad: "check-sso",
        silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
        pkceMethod: "S256",
      })
      .then(() => {
        setLoading(false);
        setKeycloak(cloak);
      });
  }, []);

  if (keycloak !== undefined) {
    return <AuthContext.Provider value={{ keycloak, loading }}>{children}</AuthContext.Provider>;
  }

  return <Spinner />;
};

interface UseAuth {
  login: () => void;
  loading: boolean;
  authenticated: boolean | undefined;
  accessToken: string | undefined;
  keycloak: KeycloakInstance;
}

export const useAuth = (): UseAuth => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("useAuth must be used inside a AuthProvider");
  const { keycloak, loading } = context;

  const login = () => keycloak.login();
  const authenticated = keycloak.authenticated;
  const accessToken = keycloak.token;

  return { login, authenticated, accessToken, keycloak, loading };
};
