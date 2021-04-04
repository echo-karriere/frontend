import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo";
import { UserProvider } from "@auth0/nextjs-auth0";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const client = useApollo(pageProps);

  return (
    <>
      <Head>
        <title>echo karriere dashboard</title>
      </Head>
      <UserProvider>
        <ApolloProvider client={client}>
          <ChakraProvider resetCSS>
            <Component {...pageProps} />
          </ChakraProvider>
        </ApolloProvider>
      </UserProvider>
    </>
  );
}
