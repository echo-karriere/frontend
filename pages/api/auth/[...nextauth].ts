import NextAuth from "next-auth";

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
      profile: (profile: Record<string, string>) => ({ ...profile, id: profile.sub }),
    },
  ],
  secret: process.env.SECRET,
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/",
  },
});
