import { Link, Typography } from "@material-ui/core";

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000">
        echo karriere
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
