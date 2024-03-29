import React from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useMenu } from "../menu/MenuProvider";

const Logged = () => {
  const setOpen = useMenu();

  return (
    <Tooltip title="Open settings">
      <IconButton
        sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
        onClick={e => setOpen(true)}>
        <Avatar alt="connect" src="/assets/images/connect.png" />
      </IconButton>
    </Tooltip>
  );
};

export default Logged;