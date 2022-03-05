import React from "react";
import { Link } from "react-router-dom";
import routes from "../config/routes";
import classes from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={classes.Header}>
      <Link to={routes.HOME}>
        <img src="/media/tasty-logo-04 1.png" alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
