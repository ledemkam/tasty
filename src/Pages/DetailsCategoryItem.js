import classes from "../styles/DetailsCategoryItem.module.css";
import routes from "../config/routes";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";

const DetailsCategoryItem = () => {
  const [detail, setDetail] = useState({});
  const [toggle, setToggle] = useState(false);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    itemdGategory();
  });

  const itemdGategory = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        console.log(response.data.meals[0]);
        setDetail(response.data.meals[0]);
      }, []);
  };

  const handleModal = () => {
    setToggle(!toggle);
  };

  const submittedTaskHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.DetailsCategoryItem}>
      <div className={classes.Header}>
        <Link to={routes.HOME}>
          <img src="/media/tasty-logo-04 1.png" alt="logo" />
        </Link>
      </div>
      <div className={classes.gateg}>
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

      <div className={classes.detail}>
        <div className={classes.mealsdetail}>
          <div className={classes.figure}>
            <img src={detail.strMealThumb} alt="strMealThum" />
          </div>

          <div className={classes.ingredients}>
            <div className={classes.Instructions}>
              <h2>{detail.strMeal}</h2>
              <p>{detail.strInstructions}</p>
            </div>
            <div className={classes.ingred}>
              <h3>Ingredients</h3>

              <ul>
                <li>
                  {detail.strMeasure1} {detail.strIngredient1}
                </li>
                <li>
                  {detail.strMeasure2} {detail.strIngredient2}
                </li>
                <li>
                  {detail.strMeasure3} {detail.strIngredient3}
                </li>
                <li>
                  {detail.strMeasure4} {detail.strIngredient4}
                </li>
                <li>
                  {detail.strMeasure5} {detail.strIngredient5}
                </li>
                <li>
                  {detail.strMeasure6} {detail.strIngredient6}
                </li>
                <li>
                  {detail.strMeasure7} {detail.strIngredient7}
                </li>
                <li>
                  {detail.strMeasure8} {detail.strIngredient8}
                </li>
                <li>
                  {detail.strMeasure9} {detail.strIngredient9}
                </li>
                <li>
                  {detail.strMeasure10} {detail.strIngredient10}
                </li>
                <li>
                  {detail.strMeasure11} {detail.strIngredient11}
                </li>
                <li>
                  {detail.strMeasure12} {detail.strIngredient12}
                </li>
                <li>
                  {detail.strMeasure13} {detail.strIngredient13}
                </li>
                <li>
                  {detail.strMeasure14} {detail.strIngredient14}
                </li>
                <li>
                  {detail.strMeasure15} {detail.strIngredient15}
                </li>
                <li>
                  {detail.strMeasure16} {detail.strIngredient16}
                </li>
                <li>
                  {detail.strMeasure17} {detail.strIngredient17}
                </li>
                <li>
                  {detail.strMeasure18} {detail.strIngredient18}
                </li>
                <li>
                  {detail.strMeasure19} {detail.strIngredient19}
                </li>
                <li>
                  {detail.strMeasure20} {detail.strIngredient20}
                </li>
              </ul>

              <div className={classes.modalo}>
                <button onClick={handleModal} className="btn-modal">
                  whch on Youtube
                </button>

                {toggle && (
                  <div className={classes.overlay}>
                    <div className={classes.modal}>
                      <div className={classes.modalcontent}>
                        <ReactPlayer url="https://youtu.be/-bo3kr303uk" />
                        <button
                          onClick={handleModal}
                          className={classes.closemodal}
                        >
                          CLOSE
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <div>
          <img src="/media/instagram.png" alt="" />
          <img src="/media/face.png" alt="" />
          <img src="/media/youtube.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailsCategoryItem;
