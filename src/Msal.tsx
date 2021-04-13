import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { CustomNavigationClient } from "./utils";

export interface MsalProps {
  pca: PublicClientApplication;
  children: ReactNode;
}

export const CustomMsalProvider = ({ pca, children }: MsalProps): JSX.Element => {
  const history = useHistory();
  const navigationClient = new CustomNavigationClient(history);
  pca.setNavigationClient(navigationClient);

  return <MsalProvider instance={pca}>{children}</MsalProvider>;
};
