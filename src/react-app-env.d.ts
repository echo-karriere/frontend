/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_CLIENT_ID: string;
    REACT_APP_AUTHORITY: string;
    REACT_APP_POLICY: string;
    REACT_APP_SCOPE: string;
  }
}
