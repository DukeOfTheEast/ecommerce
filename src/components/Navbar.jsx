// import React from "react";
// import { Link } from "react-router-dom";
import classes from "../components/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <h2>abloke</h2>
      <div className={classes.navlink}>
        <a href="">Search</a>
        <a href="">Help</a>
        <a href="">My account</a>
      </div>
    </div>
  );
};

export default Navbar;
