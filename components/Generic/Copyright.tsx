import { Link, Typography } from "@material-ui/core";

export const Copyright = (): JSX.Element => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="https://www.echokarriere.no">
      echo karriere
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);
