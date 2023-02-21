import React from "react";
import CircleNotificationsSharpIcon from "@mui/icons-material/CircleNotificationsSharp";
import { AppBar, Toolbar, Tabs, Tab, Button } from "@mui/material";
const Navbar = () => {
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#F4F1EA" }}>
        <Toolbar>
          <Tabs textColor="primary">
            <Tab label="Products" />
            <Tab label="Services" />
            <Tab label="Contact Us" />
            <Tab label="About Us" />
          </Tabs>

          <CircleNotificationsSharpIcon sx={{ marginLeft: "auto" }} />

          <Button sx={{ marginLeft: "auto" }} variant="contained">
            Login{" "}
          </Button>

          <Button sx={{ marginLeft: "10px" }} variant="contained">
            SignUp{" "}
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
