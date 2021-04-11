import "next-auth";
declare module "next-auth" {
  interface Session {
    error: string;
  }

  interface User {
    resource_access?: {
      backend: {
        roles: string[];
      };
    };
  }
}
