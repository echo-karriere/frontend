import { DarkModeSwitch, Container } from "../components";
import { CompaniesList } from "../components/companies/CompaniesList";
import { initializeApollo } from "../lib/apollo";
import type { NormalizedCacheObject } from "@apollo/client";

export default function Index(): JSX.Element {
  return (
    <Container>
      <DarkModeSwitch />
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
