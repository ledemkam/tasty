import React from "react";
import classes from "../styles/Card.module.css";

const Card1 = ({ item }) => {
  return (
    <div className={classes.Card1}>
      <h2>{item.strCategory}</h2>
      <div>
        <img src={item.strCategoryThumb} alt="strCategoryThumb" />
      </div>
    </div>
  );
};

export default Card1;
