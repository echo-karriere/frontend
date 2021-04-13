import { forwardRef, ReactNode, useMemo } from "react";
import { Link, LinkProps as RouterLinkProps } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

interface LinkListItemProps {
  icon: ReactNode;
  to: string;
  title: string;
}

export const LinkListItem = ({ icon, title, to }: LinkListItemProps): JSX.Element => {
  const CustomLink = useMemo(
    // eslint-disable-next-line react/display-name
    () => forwardRef<null, Omit<RouterLinkProps, "to">>((linkProps, ref) => <Link ref={ref} to={to} {...linkProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={CustomLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </li>
  );
};
