import { Box, Container, Typography } from "@material-ui/core";
import React from "react";

// const me = gql`
//   query Me {
//     me {
//       id
//       name
//     }
//   }
// `;

function App() {
  return (
    <React.StrictMode>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Hello, world!
          </Typography>
        </Box>
      </Container>
    </React.StrictMode>
  );
}

export default App;
