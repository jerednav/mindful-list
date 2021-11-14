import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import { useNavigate as UseNavigate } from "react-router";

const Stylesheet = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: "#000",
    textDecoration: "none",
  },
});

const index = () => {
  const classes = Stylesheet();
  const navigate = UseNavigate();

  const handleSignOut = () => {
    //signOut the user
    navigate("signin");
  };

  return (
    <>
      <AppBar position='static' style={{ background: "#f4f4f6" }}>
        <Toolbar>
          <Typography variant='h4' className={classes.root}>
            <Link to='/' className={classes.linkStyle}>
              mindful list
            </Link>
          </Typography>
          <Typography
            variant='subtitle2'
            className={classes.root}
            color='inherit'
          >
            Logged in as Ace
          </Typography>
          <Button onClick={() => handleSignOut()}>SignOut</Button>
          <Button>
            <Link to='/signin' className={classes.linkStyle}>
              Sign In
            </Link>
          </Button>
          <Button>
            <Link to='/signup/' className={classes.linkStyle}>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default index;
