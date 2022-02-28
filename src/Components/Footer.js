import React from "react";
import classes from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <img src="/media/instagram.png" alt="" />
        <img src="/media/face.png" alt="" />
        <img src="/media/youtube.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
