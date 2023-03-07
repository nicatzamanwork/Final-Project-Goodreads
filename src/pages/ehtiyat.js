import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import Search from "../components/navbar/searchbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Goodreads from "../components/assets/goodreadslogo.png";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import ForumIcon from "@mui/icons-material/Forum";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
}));

function GoodreadsHomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img src={Goodreads} className="image" />
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuItem />
          </IconButton>

          <IconButton color="inherit">
            <Search />
          </IconButton>
          <IconButton color="inherit"></IconButton>
        </Toolbar>
      </AppBar>
      <div style={{ padding: "50px" }}>
        <h1>Welcome to Goodreads</h1>
        <p>
          Discover and share books you love on Goodreads, the world's largest
          site for readers and book recommendations!
        </p>
      </div>
    </div>
  );
}

export default GoodreadsHomePage;
