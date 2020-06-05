import React, { useState, useEffect } from "react";
import useSWR, { SWRConfig } from "swr";
import { Container, Box, Typography } from "@material-ui/core";
import fetcher, { instance } from "./utils/fetch";

function Pages() {
  const { data, error } = useSWR("/api/page/");
  console.log(data, error);

  if (error) return <div>Error!!!!0101</div>;
  if (!data) return <div>Loading...</div>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

const UserAPI = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const resp = await instance.post("/auth/login/", { email: "root@example.org", password: "root" });
      setToken(resp.data.key);
    };
    fetchData();
  }, []);

  console.log(token);

  if (!token) return <div>Loading...</div>;
  else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = useSWR(["/auth/user/", { headers: { Authorization: `Token ${token}` } }]);
    setUser(data);
  }

  return <div>{JSON.stringify(user, null, 2)}</div>;
};

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
            <UserAPI />
          </Box>
        </Container>
      </SWRConfig>
    </React.StrictMode>
  );
}

export default App;
