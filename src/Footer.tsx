import { Container, Typography } from "@material-ui/core";
import { Copyright } from "./Copyright";
import { useStyles } from "./styles";

export const Footer = (): JSX.Element => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1">My sticky footer can be found here.</Typography>
        <Copyright />
      </Container>
    </footer>
  );
};
