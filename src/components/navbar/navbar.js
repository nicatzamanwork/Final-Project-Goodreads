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
import ProfileDropDown from "./profiledropdown";
import EmailIcon from "@mui/icons-material/Email";
import CircleNotificationsSharpIcon from "@mui/icons-material/CircleNotificationsSharp";
import { AppBar, Toolbar, Tabs, Tab, Button } from "@mui/material";
import CommunityDropDown from "./communitydropdown";
import { width } from "@mui/system";
const Navbar = () => {
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#F4F1EA" }}>
        <Toolbar>
          <img src={Goodreads} className="image" />
          <Tabs textColor="primary">
            <Tab label="Home" />
            <Tab label="My Books" />
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    Browse
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    Community
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </Tabs>
          <CustomizedInputBase />

          <CircleNotificationsSharpIcon sx={{ marginLeft: "auto" }} />
          <EmailIcon />
          <ForumIcon />
          <GroupIcon />
          <ProfileDropDown />

          <Button
            className="LoginSignup"
            sx={{ marginLeft: "auto" }}
            variant="contained"
          >
            Login{" "}
          </Button>
          <Button
            className="LoginSignup"
            sx={{ marginLeft: "10px" }}
            variant="contained"
          >
            SignUp{" "}
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
