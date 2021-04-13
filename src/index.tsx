import { ApolloProvider } from "@apollo/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import { apolloClient } from "./Apollo";
import { theme } from "./utils";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Configuration, PublicClientApplication } from "@azure/msal-browser";

const configuration: Configuration = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID,
    authority: `https://${process.env.REACT_APP_AUTHORITY}.b2clogin.com/${process.env.REACT_APP_AUTHORITY}.onmicrosoft.com/${process.env.REACT_APP_POLICY}`,
    knownAuthorities: [`${process.env.REACT_APP_AUTHORITY}.b2clogin.com`],
  },
};

const pca = new PublicClientApplication(configuration);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <CssBaseline />
            <App pca={pca} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
