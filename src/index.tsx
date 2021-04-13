import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import { theme } from "./utils";
import { BrowserRouter } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import { ApolloApp } from "./Apollo";
import { CustomMsalProvider } from "./Msal";

const configuration: Configuration = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID,
    authority: `https://${process.env.REACT_APP_AUTHORITY}.b2clogin.com/${process.env.REACT_APP_AUTHORITY}.onmicrosoft.com/${process.env.REACT_APP_POLICY}`,
    knownAuthorities: [`${process.env.REACT_APP_AUTHORITY}.b2clogin.com`],
  },
};

export const pca = new PublicClientApplication(configuration);

ReactDOM.render(
  <React.StrictMode>
    <CustomMsalProvider pca={pca}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <CssBaseline />
            <ApolloApp />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </BrowserRouter>
    </CustomMsalProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
