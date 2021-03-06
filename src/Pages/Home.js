import React, { useEffect, useState } from "react";
import Card1 from "../Components/Card1";
import classes from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import routes from "../config/routes";
import axios from "axios";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        setCategories(res.data.categories);
      });
  }, []);

  const submittedTaskHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.Home}>
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
      <h1>Or go through our categories</h1>

      <div className={classes.result}>
        {categories.map((item) => (
          <Link to={routes.CATEGORYITEM}>
            {" "}
            <Card1 key={item.idCategory} item={item} />
          </Link>
        ))}
        <Link to={routes.RANDOM}>
          <div className={classes.radom}>
            <h2>Random</h2>
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
