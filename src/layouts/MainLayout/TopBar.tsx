import type { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import echoLogo from "../../static/icon-256x256.png";
import PropTypes from "prop-types";
import { AppBar, Box, Button, Divider, Toolbar, Hidden, Typography, Link, makeStyles } from "@material-ui/core";
import { APP_VERSION } from "../../constants";

interface TopBarProps {
  className?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    height: 64,
  },
  logo: {
    marginRight: theme.spacing(2),
    maxHeight: 64,
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    "& + &": {
      marginLeft: theme.spacing(2),
    },
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const TopBar: FC<TopBarProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} color="default" {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <img src={echoLogo} className={classes.logo} />
        </RouterLink>
        <Hidden mdDown>
          <Typography variant="caption" color="textSecondary">
            Version {APP_VERSION}
          </Typography>
        </Hidden>
        <Box flexGrow={1} />
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/jobs"
          underline="none"
          variant="body2"
        >
          Jobber
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="https://echokarriere.no"
          underline="none"
          variant="body2"
        >
          echo-web
        </Link>
        <Divider className={classes.divider} />
        <Button color="secondary" component="a" href="/admin/dashboard" variant="contained" size="small">
          Admin Panel
        </Button>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
