import React from "react";
import './Navbar.css';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Link from "react-router-dom/Link";

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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
