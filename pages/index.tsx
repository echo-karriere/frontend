import { DarkModeSwitch, Container } from "../components";
import { CompaniesList } from "../components/companies/CompaniesList";
import { initializeApollo } from "../lib/apollo";
import type { NormalizedCacheObject } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0";

export default function Index(): JSX.Element {
  const { user } = useUser();

  return (
    <Container>
      <DarkModeSwitch />
      {user ? <p>Hello {user.name}</p> : <a href="/api/auth/login">Please sign in</a>}
      <p>Hello, world!</p>
      <CompaniesList />
    </Container>
  );
}

export function getStaticProps(): { props: { initialApolloState: NormalizedCacheObject } } {
  const client = initializeApollo();

  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
}
