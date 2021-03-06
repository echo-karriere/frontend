import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Drawer, IconButton, List, Paper } from "@material-ui/core";
import { drawerWidth, LinkListItem } from "../";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import { Business, Work } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
}));

interface SidebarProps {
  open: boolean;
  handleDrawerClose: () => void;
}

export const Sidebar = ({ open, handleDrawerClose }: SidebarProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <div>
        <Paper elevation={0}>
          <List aria-label="main mailbox folders">
            <LinkListItem to="/" title="Dashboard" icon={<DashboardIcon />} />
            <LinkListItem to="/companies" title="Companies" icon={<Business />} />
            <LinkListItem to="/jobs" title="Jobs" icon={<Work />} />
          </List>
          <Divider />
          <LinkListItem to="/settings/user" title="Account" icon={<PeopleIcon />} />
        </Paper>
      </div>
    </Drawer>
  );
};
