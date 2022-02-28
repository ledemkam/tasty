import React, { useEffect, useContext } from "react";
import classes from "../styles/Random.module.css";
import { myContext } from "../Context/context";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Random = () => {
  const { randomMeal, fetchRandomMeal } = useContext(myContext);
  const handleClick = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    fetchRandomMeal();
  }, [fetchRandomMeal]);
  return (
    <div className={classes.random} onClick={handleClick}>
      <Header />
      {randomMeal.map((meal) => (
        <div key={meal.idMeal} className={classes.randomgrid}>
          <div className={classes.randomgridcontrols}>
            <img src={meal.strMealThumb} alt="#" />
            <button onClick={fetchRandomMeal}> Generate Another Meal</button>
          </div>

          <div className={classes.randomgridinstructions}>
            <h2>Instructions</h2>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Random;
