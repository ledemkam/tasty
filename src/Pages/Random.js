import React, { useEffect, useState } from "react";
import classes from "../styles/Random.module.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import routes from "../config/routes";

const Random = () => {
  const [randomMeal, setRandomMeal] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        console.log(res.data.meals);
        setRandomMeal(res.data.meals);
      });
  }, []);

  return (
    <div className={classes.random} onClick={handleClick}>
      <Header />
      {randomMeal.map((meal) => (
        <div key={meal.idMeal} className={classes.randomgrid}>
          <div className={classes.randomgridcontrols}>
            <img src={meal.strMealThumb} alt="#" />
            <Link to={routes.RANDOM}>
              {" "}
              <button> Generate Another Meal</button>
            </Link>
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
