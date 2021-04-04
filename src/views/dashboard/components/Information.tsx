import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Title } from ".";

function preventDefault(event: { preventDefault: () => void }) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export const Information = (): JSX.Element => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Antall visninger</Title>
      <Typography component="p" variant="h4">
        12182
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        oppdatert 25 Oktober, 2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Statistikk
        </Link>
      </div>
    </React.Fragment>
  );
};
