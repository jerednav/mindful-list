import React from "react";

import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    textDecoration: "none",
    color: "#fafafa",
  },
  authButton: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("SignIn");
  };
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h4' className={classes.root}>
            <Link className={classes.linkStyle} to='/'>
              Mindful notes
            </Link>
          </Typography>
          <Typography variant='subtitle2' className={classes.root}>
            Logged in as Ace
          </Typography>
          <Button color='inherit' onClick={() => handleSignOut()}>
            Sign Out
          </Button>
          <Button className={classes.linkStyle} color='inherit'>
            <Link className={classes.linkStyle} to='/signin'>
              Sign In
            </Link>
          </Button>
          <Button>
            <Link className={classes.linkStyle} to='/signup'>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
