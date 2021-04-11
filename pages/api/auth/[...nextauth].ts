/* eslint-disable @typescript-eslint/require-await */
import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { WithAdditionalParams } from "next-auth/_utils";

export default NextAuth({
  providers: [
    {
      id: "keycloak",
      name: "Keycloak",
      type: "oauth",
      version: "2.0",
      params: {
        grant_type: "authorization_code",
      },
      scope: "email profile openid",
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      clientSecret: "",
      domain: "",
      accessTokenUrl: `${process.env.KEYCLOAK_BASE_URL}/token`,
      requestTokenUrl: `${process.env.KEYCLOAK_BASE_URL}/auth`,
      authorizationUrl: `${process.env.KEYCLOAK_BASE_URL}/auth?response_type=code`,
      profileUrl: `${process.env.KEYCLOAK_BASE_URL}/userinfo`,
      profile: (profile: Record<string, string>) => {
        return { ...profile, id: profile.sub };
      },
    },
  ],
  secret: process.env.SECRET,
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/",
  },
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async jwt(token, user, account, _profile, _isNewUser): Promise<WithAdditionalParams<JWT>> {
      const usr = user as { resource_access: { backend: { roles: Array<string> } } };
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
        token.roles = usr.resource_access.backend.roles;
      }

      return token;
    },
    async session(session, token): Promise<WithAdditionalParams<Session>> {
      const tok = token as JWT;
      const sess = (session as unknown) as Record<string, unknown>;
      sess.accessToken = tok?.accessToken as string;
      sess.roles = tok?.roles as Array<string>;

      return sess as WithAdditionalParams<Session>;
    },
  },
});
