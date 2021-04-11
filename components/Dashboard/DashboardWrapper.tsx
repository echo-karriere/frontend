import React, { ReactNode, useEffect } from "react";
import { NavBar } from "./NavBar";
import { Sidebar } from "./Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";
import { Copyright } from "../Generic";
import { useSession } from "next-auth/client";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

interface DashboardWrapperProps {
  title: string;
  children: NonNullable<ReactNode>;
}

export const DashboardWrapper = ({ children, title }: DashboardWrapperProps): JSX.Element => {
  const [session] = useSession();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  if (!session) {
    console.error("GOD NO");
  } else {
    console.log(session);
  }

  useEffect(() => {
    document.title = `${title} | echo karriere`;
  }, [title]);

  return (
    <div className={classes.root}>
      <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
};
