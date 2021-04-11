/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_GRAPHQL_URL: string;
    NEXT_PUBLIC_URL: string;
    NEXTAUTH_URL: string;
    KEYCLOAK_BASE_URL: string;
    KEYCLOAK_CLIENT_ID: string;
    SECRET: string;
  }
}
