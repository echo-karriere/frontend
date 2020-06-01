import React from "react";
import { Container, Box, Typography } from "@material-ui/core";

function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hello, world!
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
