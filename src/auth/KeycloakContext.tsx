import { createContext, useContext } from "react";
import { KeycloakInstance } from "keycloak-js";

export const KeycloakContext = createContext<KeycloakInstance | undefined>(undefined);

export const useKeycloak = (): KeycloakInstance => {
  const context = useContext(KeycloakContext);
  if (!context) throw new Error("useKeycloak must be used inside a KeycloakContext");

  return context;
};
