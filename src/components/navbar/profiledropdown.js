import React from "react";
import Goodreads from "../assets/goodreadslogo.png";
import { useState } from "react";
import CustomizedInputBase from "./searchbar";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import ForumIcon from "@mui/icons-material/Forum";
import EmailIcon from "@mui/icons-material/Email";
import CircleNotificationsSharpIcon from "@mui/icons-material/CircleNotificationsSharp";
import { AppBar, Toolbar, Tabs, Tab, Button } from "@mui/material";
import CommunityDropDown from "./communitydropdown";
import { width } from "@mui/system";

const ProfileDropDown = () => {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <PersonIcon variant="contained" {...bindTrigger(popupState)} />

          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default ProfileDropDown;
