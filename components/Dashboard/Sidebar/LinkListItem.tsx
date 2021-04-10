import { ReactNode } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link } from "../../Generic/Link";

interface LinkListItemProps {
  icon: ReactNode;
  to: string;
  title: string;
}

export const LinkListItem = ({ icon, title, to }: LinkListItemProps): JSX.Element => {
  return (
    <li>
      <ListItem button component={Link} href={to}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </li>
  );
};
