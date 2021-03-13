import { ApolloProvider } from "@apollo/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { apolloClient } from "./Apollo";
import store from "./store";

const render = () => {
  const App = require("./App").default;

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <CssBaseline />
          <App />
        </ApolloProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
  );
};

render();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", render);
}
