import React, { useState, useCallback, useContext } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { myContext } from "../Context/context";
import classes from "../styles/DetailsCategory.module.css";

const DetailsCategory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { fetchFiltercatergory, detail } = useContext(myContext);

  const fetchFiltersHandler = useCallback(() => {
    fetchFiltercatergory(searchTerm);
  }, [searchTerm, fetchFiltercatergory]);

  const submittedTaskHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.DetailsCategory}>
      <Header />
      <div>
        <form onSubmit={(e) => submittedTaskHandler(e)}>
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type something to search"
          />
          <button onClick={fetchFiltersHandler}>Search Meal</button>
        </form>
      </div>
      <h2>Everything ...</h2>
      {/* <div className={classes.result}>
          {detailsCate.map((item) => (
            <Card1 key={item.idCategory} item={item} />
          ))}
      </div>  */}
      <Footer />
    </div>
  );
};

export default DetailsCategory;
