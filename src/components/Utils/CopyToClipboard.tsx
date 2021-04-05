import copy from "clipboard-copy";
import * as React from "react";
import { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

interface ChildProps {
  copy: (content: string) => void;
}

interface CopyToClipboardProps {
  children: (props: ChildProps) => React.ReactElement<unknown>;
}

export const CopyToClipboard = ({ children }: CopyToClipboardProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const onCopy = async (content: string) => {
    await copy(content);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      {children({ copy: onCopy })}
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" severity="success" onClose={handleClose}>
          Copied to clipboard!
        </MuiAlert>
      </Snackbar>
    </>
  );
};
