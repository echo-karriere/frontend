import { makeStyles, Avatar, Typography, Button } from "@material-ui/core";
import { SentimentVeryDissatisfiedOutlined } from "@material-ui/icons";
import { useHistory } from "react-router";
import { FullpageWrapper } from "../components";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const FourOhFour = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <FullpageWrapper>
      <Avatar className={classes.avatar}>
        <SentimentVeryDissatisfiedOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        404: Page not found
      </Typography>
      <div>
        <Button color="primary" onClick={() => history.go(-1)}>
          Go back
        </Button>
      </div>
    </FullpageWrapper>
  );
};
