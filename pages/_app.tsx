import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { theme } from "../lib";
import { CssBaseline } from "@material-ui/core";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>echo karriere dashboard</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <CssBaseline />
          <Component {...pageProps} />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </>
  );
}
