import React from "react";
import './Navbar.css';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

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
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="Appbar" style={{backgroundColor:"red"}}>
        <Toolbar>
        <span className="Logo" style={{color: "black"}}>SEMOCoder</span>
        <LoginButton className="Login"/>
        <LogoutButton/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
