import { makeStyles, Container, Avatar, Typography } from "@material-ui/core";
import { ErrorOutline } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const ErrorPage = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ErrorOutline />
        </Avatar>
        <Typography component="h1" variant="h5">
          Something went wrong :(
        </Typography>
        <Typography>Refresh the page and try again</Typography>
      </div>
    </Container>
  );
};
