/* eslint-disable @typescript-eslint/require-await */
import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { WithAdditionalParams } from "next-auth/_utils";
import qs from "qs";

async function refreshAccessToken(token: Record<string, string>) {
  try {
    const resp = await fetch(`${process.env.KEYCLOAK_BASE_URL}/token`, {
      body: qs.stringify({
        grant_type: "refresh_token",
        client_id: process.env.KEYCLOAK_CLIENT_ID,
        refresh_token: token.refreshToken,
      }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: "POST",
    });

    const refreshedTokens = (await resp.json()) as Record<string, string>;

    if (!resp.ok) throw refreshedTokens;

    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      accessTokenExpires: Date.now() + ((refreshedTokens.expires_in as unknown) as number) * 1000,
      refreshToken: refreshedTokens.refreshToken ?? token.refreshToken,
    };
  } catch (e) {
    console.error(e);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

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
      const tok = token as Record<string, string>;

      if (account && user) {
        return {
          accessToken: account.accessToken,
          accessTokenExpires: Date.now() + (account.expires_in as number) * 1000,
          refreshToken: account.refreshToken,
          roles: usr.resource_access.backend.roles,
          user,
        };
      }

      if (Date.now() < ((tok.accessTokenExpires as unknown) as number)) {
        return token;
      }

      return refreshAccessToken(token as Record<string, string>);
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
