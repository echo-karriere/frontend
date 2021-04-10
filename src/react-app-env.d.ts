/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_GRAPHQL_URL: string;
    REACT_APP_AUTH_REALM: string;
    REACT_APP_AUTH_CLIENT_ID: string;
  }
}
