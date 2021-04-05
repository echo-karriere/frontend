import { Container, makeStyles, Typography } from "@material-ui/core";
import { Copyright } from "../index";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: theme.palette.type === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

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
