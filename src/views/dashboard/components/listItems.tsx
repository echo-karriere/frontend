import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import { Route, MemoryRouter } from "react-router";
import { Divider, List, makeStyles, Paper } from "@material-ui/core";

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, "to">>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

// Additional styling for the sidebar/drawer
const useStyles = makeStyles({
  root: {},
});

export default function ListRouter() {
  const classes = useStyles();

  return (
    <MemoryRouter initialEntries={["/dashboard"]} initialIndex={0}>
      <div className={classes.root}>
        <Route>
          <Paper elevation={0}>
            <List aria-label="Main Pages">
              <ListItemLink to="/dashboard" primary="Dashboard" icon={<DashboardIcon />} />
              <ListItemLink to="/settings" primary="Account" icon={<PeopleIcon />} />
            </List>
            <Divider />
            <List aria-label="Editor">
              <ListItemLink to="#" primary="Business presentation" icon={<AssignmentIcon />} />
              <ListItemLink to="#" primary="Contact information" icon={<AssignmentIcon />} />
            </List>
          </Paper>
        </Route>
      </div>
    </MemoryRouter>
  );
}

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Account" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Your Pages</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Business presentation" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Contact information" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Additional information" />
    </ListItem>
  </div>
);
