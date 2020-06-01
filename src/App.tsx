import React from "react";
import useSWR, { SWRConfig } from "swr";
import { Container, Box, Typography } from "@material-ui/core";
import fetcher from "./utils/fetch";

function Pages() {
  const { data, error } = useSWR("/api/page/");
  console.log(data, error);

  if (error) return <div>Error!!!!0101</div>;
  if (!data) return <div>Loading...</div>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

function App() {
  return (
    <React.StrictMode>
      <SWRConfig value={{ fetcher: fetcher }}>
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Hello, world!
            </Typography>
            <Pages />
          </Box>
        </Container>
      </SWRConfig>
    </React.StrictMode>
  );
}

export default App;
