/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import type { FC, ReactNode } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  ListSubheader,
  Typography,
  makeStyles,
} from "@material-ui/core";
import NavItem from "./NavItem";
import PieChartIcon from "@material-ui/icons/PieChart";
import WorkIcon from "@material-ui/icons/Work";

interface NavBarProps {
  onMobileClose: () => void;
  openMobile: boolean;
}

interface Item {
  href?: string;
  icon?: ReactNode;
  info?: ReactNode;
  items?: Item[];
  title: string;
}

interface Section {
  items: Item[];
  subheader: string;
}

const sections: Section[] = [
  {
    subheader: "Rapporter",
    items: [
      {
        title: "Dashboard",
        icon: PieChartIcon,
        href: "/admin/dashboard",
      },
    ],
  },
  {
    subheader: "Jobber",
    items: [
      {
        title: "List jobber",
        icon: WorkIcon,
        href: "/jobs",
      },
    ],
  },
];

function renderNavItems({ items, pathname, depth = 0 }: { items: Item[]; pathname: string; depth?: number }) {
  // @ts-ignore
  return (
    <List disablePadding>{items.reduce((acc, item) => reduceChildRoutes({ acc, item, pathname, depth }), [])}</List>
  );
}

function reduceChildRoutes({
  acc,
  pathname,
  item,
  depth,
}: {
  acc: any[];
  pathname: string;
  item: Item;
  depth: number;
}) {
  const key = item.title + depth;

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    });

    acc.push(
      <NavItem depth={depth} icon={item.icon} info={item.info} key={key} open={Boolean(open)} title={item.title}>
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>,
    );
  } else {
    acc.push(<NavItem depth={depth} href={item.href} icon={item.icon} info={item.info} key={key} title={item.title} />);
  }

  return acc;
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

const NavBar: FC<NavBarProps> = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  //const { user } = useAuth();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Hidden lgUp>
        <Box p={2} display="flex" justifyContent="center">
          <RouterLink to="/">
            <Typography variant="h5">Insert echo logo here</Typography>
          </RouterLink>
        </Box>
      </Hidden>
      <Box p={2}>
        <Box display="flex" justifyContent="center">
          <RouterLink to="/app/account">
            <Avatar alt="User" className={classes.avatar} />
          </RouterLink>
        </Box>
        <Box mt={2} textAlign="center">
          <Link component={RouterLink} to="/app/account" variant="h5" color="textPrimary" underline="none">
            Brukernavn
          </Link>
        </Box>
      </Box>
      <Divider />
      <Box p={2}>
        {sections.map((section) => (
          <List
            key={section.subheader}
            subheader={
              <ListSubheader disableGutters disableSticky>
                {section.subheader}
              </ListSubheader>
            }
          >
            {renderNavItems({
              items: section.items,
              pathname: location.pathname,
            })}
          </List>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer anchor="left" classes={{ paper: classes.desktopDrawer }} open variant="persistent">
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default NavBar;
