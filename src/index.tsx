import { ApolloProvider } from "@apollo/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import { apolloClient } from "./Apollo";
import { theme } from "./utils/theme";
import { App, history } from "./App";
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

const onRedirectCallback = (appState: AppState) => {
  history.replace((appState && appState.returnTo) ?? window.location.pathname);
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={process.env.REACT_APP_DOMAIN}
        clientId={process.env.REACT_APP_CLIENT_ID}
        redirectUri={window.location.origin}
        audience={process.env.REACT_APP_AUDIENCE}
        onRedirectCallback={onRedirectCallback}
      >
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </ApolloProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
