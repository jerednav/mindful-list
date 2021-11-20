import React from "react";

import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { useSelector, useDispatch} from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useNavigate } from "react-router-dom";

import { signOut } from '../../store/actions/authActions'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    textDecoration: "none",
    color: "black",
  },
  authButton: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: '#f4f4f6',
    color: "black"
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const state = useSelector(state => state)
  const auth = useSelector(state => state.auth)
  console.log(state)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(signOut())
    navigate("SignIn");
  };
  return (
    <>
      <AppBar position='static'>
        <Toolbar className={classes.navBar}>
          <Typography variant='h4' className={classes.root}>
            <Link className={classes.linkStyle} to='/'>
              Mindful List
            </Link>
          </Typography>
          { auth._id ? (
            <>
          <Typography variant='subtitle2' className={classes.root}>
            Logged in as {auth.name}
          </Typography>
          <Button color='inherit' onClick={() => handleSignOut()}>
            Sign Out
          </Button>
          </>
          ): (
            <>
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
          </>
          )}

        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
