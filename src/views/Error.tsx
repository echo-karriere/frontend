import { makeStyles, Avatar, Typography } from "@material-ui/core";
import { ErrorOutline } from "@material-ui/icons";
import { FullpageWrapper } from "../components";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const ErrorPage = (): JSX.Element => {
  const classes = useStyles();

  return (
    <FullpageWrapper>
      <Avatar className={classes.avatar}>
        <ErrorOutline />
      </Avatar>
      <Typography component="h1" variant="h5">
        Something went wrong :(
      </Typography>
      <Typography>Refresh the page and try again</Typography>
    </FullpageWrapper>
  );
};
