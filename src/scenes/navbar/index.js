import React from "react";
import { useState } from "react";
import DrawerComp from "./drawerComp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Search from "./searchBar";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Logo from "../navbar/Goodreads.png";

import { useEffect } from "react";
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
import { height } from "@mui/system";

const Navbar = () => {
  const [value, setvalue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const [items, setItems] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  console.log(categoryName);
  const handle = (e) => {
    console.log(e.target.value);
  };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/book/:category")
  //     .then((response) => setItems(response.data))
  //     .catch((error) => console.error(error));
  // }, []);

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <AppBar sx={{ background: "#F4F1EA" }}>
            <Toolbar>
              <Typography>
                <img
                  src={Logo}
                  alt="Logo"
                  style={{ width: "220px", height: "50px" }}
                />
              </Typography>
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
                    <Button>
                      <NavLink to="/home"> Home</NavLink>
                    </Button>
                    <Button>
                      <NavLink to="/mybook"> My Book</NavLink>
                    </Button>

                    <Tab />
                  </Tabs>
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
