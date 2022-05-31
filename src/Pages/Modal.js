import React from "react";
import ReactPlayer from "react-player";
import classes from "../styles/Modal.module.css";

const Modal = () => {
  return (
    <div className={classes.modal}>
      <div>
        <ReactPlayer url="https://youtu.be/-bo3kr303uk" />
      </div>

      <button>x</button>
    </div>
  );
};

export default Modal;
