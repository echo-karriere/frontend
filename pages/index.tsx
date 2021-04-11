import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box, Button, Grid, Link as MuiLink, Paper, Typography } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { Copyright } from "../components";
import { getSession, signIn } from "next-auth/client";
import { NextPageContext } from "next";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.type === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    height: "100%",
    margin: theme.spacing(0, 4),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  wrapper: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Landing(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h4">
            echo karriere portal
          </Typography>
          <div className={classes.wrapper}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => {
                e.preventDefault();
                void signIn("keycloak", {
                  callbackUrl: "http://localhost:3000/dashboard",
                });
              }}
            >
              Sign in
            </Button>
            <Grid container>
              <Grid item xs>
                <MuiLink href={"#"} variant="body2">
                  Forgot password?
                </MuiLink>
              </Grid>
            </Grid>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}

Landing.getInitialProps = async ({ req, res }: NextPageContext) => {
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, { Location: "/dashboard" });
    res.end();
    return;
  }

  return {
    session: undefined,
  };
};
