import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Head } from "next/document";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>echo karriere dashboard</title>
      </Head>
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
