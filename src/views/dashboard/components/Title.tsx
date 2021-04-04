import React from "react";
import Typography from "@material-ui/core/Typography";

interface Props {
  children: React.ReactNode;
}

export const Title = ({ children }: Props): JSX.Element => (
  <Typography component="h2" variant="h6" color="primary" gutterBottom>
    {children}
  </Typography>
);
