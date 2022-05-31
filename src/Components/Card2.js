import React from "react";
import classes from "../styles/Card2.module.css";

const Card1 = ({ val }) => {
  return (
    <div className={classes.Card2}>
      <h2>{val.strMeal}</h2>
      <div>
        <img src={val.strMealThumb} alt="strMealThumb" />
      </div>
    </div>
  );
};

export default Card1;
