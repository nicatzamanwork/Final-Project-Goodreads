import React from "react";
import Goodreads from "../assets/goodreadslogo.png";
import { useState } from "react";
import Search from "./searchbar";
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
import { NavLink } from "react-router-dom";
import "./cssofnavbar.css";
const Navbar = () => {
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#F4F1EA" }}>
        <Toolbar>
          <img src={Goodreads} className="image" />
          <Tabs textColor="primary">
            <Button className="LoginSignup" sx={{ marginLeft: "auto" }}>
              <NavLink to="/" className="NavLink">
                Home
              </NavLink>
            </Button>

            <Button className="LoginSignup" sx={{ marginLeft: "auto" }}>
              <NavLink to="/mybooks" className="NavLink">
                My Books
              </NavLink>
            </Button>

            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button {...bindTrigger(popupState)}>Browse</Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Fiction</MenuItem>
                    <MenuItem onClick={popupState.close}>Horror</MenuItem>
                    <MenuItem onClick={popupState.close}>
                      Humor and Comedy
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>Mystery</MenuItem>
                    <MenuItem onClick={popupState.close}>Psychology</MenuItem>
                    <MenuItem onClick={popupState.close}>All Genres</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button {...bindTrigger(popupState)}>Community</Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Groups</MenuItem>
                    <MenuItem onClick={popupState.close}>Discussions</MenuItem>
                    <MenuItem onClick={popupState.close}>Quotes</MenuItem>
                    <MenuItem onClick={popupState.close}>
                      Ask the Author
                    </MenuItem>
                    <MenuItem onClick={popupState.close}>People</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </Tabs>
          <Search />

          <CircleNotificationsSharpIcon sx={{ marginLeft: "auto" }} />
          <EmailIcon />
          <ForumIcon />
          <GroupIcon />
          <ProfileDropDown />

          <Button className="LoginSignup" sx={{ marginLeft: "auto" }}>
            <NavLink to="/signup" className="NavLink">
              Login{" "}
            </NavLink>
          </Button>
          <Button className="LoginSignup" sx={{ marginLeft: "10px" }}>
            <NavLink to="/signup" className="NavLink">
              Sign Up{" "}
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
