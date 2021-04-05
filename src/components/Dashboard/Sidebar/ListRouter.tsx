import { makeStyles } from "@material-ui/core/styles";
import { Divider, List, Paper } from "@material-ui/core";
import { LinkListItem } from "./LinkListItem";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";

const useStyles = makeStyles({
  root: {
    width: 360,
  },
});

export const ListRouter = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <List aria-label="main mailbox folders">
          <LinkListItem to="/dashboard" title="Dashboard" icon={<DashboardIcon />} />
        </List>
        <Divider />
        <LinkListItem to="/settings" title="Account" icon={<PeopleIcon />} />
      </Paper>
    </div>
  );
};
