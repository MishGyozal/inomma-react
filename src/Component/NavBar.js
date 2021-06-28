import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { NavBarStyle } from "../utils/styles";

const useStyles = makeStyles((theme) => NavBarStyle(theme));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography variant="h5" className={classes.title}>
            Home
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
