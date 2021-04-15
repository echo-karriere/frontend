import { makeStyles, Container } from "@material-ui/core";
import { ReactNode } from "react";

const useStyles = makeStyles({
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
});

interface FullpageProps {
  children: ReactNode;
}

export const FullpageWrapper = ({ children }: FullpageProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <div className={classes.paper}>{children}</div>
    </Container>
  );
};
