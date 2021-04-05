import { makeStyles } from "@material-ui/core/styles";

export * from "./DashboardWrapper";
export * from "./NavBar";
export * from "./Sidebar";
export * from "./UserMenu";

export const drawerWidth = 240;

export const useDashboardStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));
