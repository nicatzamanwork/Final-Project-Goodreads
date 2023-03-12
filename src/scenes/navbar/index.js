import React from "react";
import { useState } from "react";
import DrawerComp from "./drawerComp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Search from "./searchBar";
import {
  AppBar,
  Typography,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Navbar = () => {
  const [value, setvalue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <AppBar sx={{ background: "#F4F1EA" }}>
            <Toolbar>
              <Typography>GoodReads</Typography>
              {isMatch ? (
                <>
                  <DrawerComp />
                </>
              ) : (
                <>
                  <Tabs
                    sx={{ marginLeft: "auto" }}
                    textColor="#964B00"
                    onChange={(e, value) => setvalue(value)}
                    value={value}
                    indicatorColor="secondary"
                  >
                    <Tab label="Home" />
                    <Tab label="My Books" />

                    <Button variant="contained" {...bindTrigger(popupState)}>
                      Browse
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>Profile</MenuItem>
                      <MenuItem onClick={popupState.close}>My account</MenuItem>
                      <MenuItem onClick={popupState.close}>Logout</MenuItem>
                    </Menu>

                    <Button variant="contained" {...bindTrigger(popupState)}>
                      Community
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>Profile</MenuItem>
                      <MenuItem onClick={popupState.close}>My account</MenuItem>
                      <MenuItem onClick={popupState.close}>Logout</MenuItem>
                    </Menu>
                    <Tab />
                    <Search />
                  </Tabs>
                  <Button sx={{ marginLeft: "auto" }} variant="contained">
                    Login
                  </Button>
                  <Button sx={{ marginLeft: "10px" }} variant="contained">
                    Sign Up
                  </Button>
                </>
              )}
            </Toolbar>
          </AppBar>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default Navbar;
