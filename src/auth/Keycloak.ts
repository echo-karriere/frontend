import Keycloak from "keycloak-js";

const keycloak = Keycloak("/keycloak.json");

export const initKeycloak = (): void => {
  void keycloak.init({
    onLoad: "check-sso",
    silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
    pkceMethod: "S256",
  });
};

export const authenticated = !!keycloak.token;
export const login = (): Keycloak.KeycloakPromise<void, void> => keycloak.login();
