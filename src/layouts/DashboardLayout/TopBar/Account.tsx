import { useRef, useState } from "react";
import type { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
//import { useHistory } from 'react-router-dom';
import { Avatar, Box, ButtonBase, Hidden, Menu, MenuItem, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
  },
  popover: {
    width: 200,
  },
}));

const Account: FC = () => {
  const classes = useStyles();
  //const history = useHistory();
  const ref = useRef<any>(null);
  //const { user, logout } = useAuth();
  //const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        // @ts-ignore
        ref={ref}
      >
        <Avatar alt="User" className={classes.avatar} />
        <Hidden smDown>
          <Typography variant="h6" color="inherit">
            Username
          </Typography>
        </Hidden>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem component={RouterLink} to="/app/social/profile">
          Profile
        </MenuItem>
        <MenuItem component={RouterLink} to="/app/account">
          Account
        </MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Account;