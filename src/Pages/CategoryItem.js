import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Card2 from "../Components/Card1";
import classes from "../styles/CategoryItem.module.css";
import Footer from "../Components/Footer";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import routes from "../config/routes";

const CategoryItem = () => {
  const [dataitem, setDataitem] = useState([]);

  const { idMeal } = useParams();
  console.log(idMeal);

  useEffect(() => {
    itemGategory();
  });

  const itemGategory = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${idMeal}`)
      .then((response) => {
        console.log(response);
        setDataitem(response.data.meals);
      });
  };

  const submittedTaskHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.category}>
      <Header />
      <div>
        <form onSubmit={(e) => submittedTaskHandler(e)}>
          <label>Find a recipe, an idea, an inspiration...</label>
          <br />
          <input
            type="text"
            // onChange={(e) => changedFormHandler(e)}
            placeholder="Type something to search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <h1>Everything `${idMeal}`</h1>

      <div className={classes.result}>
        {dataitem.map((val) => {
          return (
            <Link to={routes.DETAILSCATEGORY}>
              {" "}
              <Card2 key={val.idMeal} val={val} />
            </Link>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryItem;
