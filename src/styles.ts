import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: theme.palette.type === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  //This is just a dummy for styling the general layout of the dashboard
  dashboard: {
    width: "100%",
  },
}));
