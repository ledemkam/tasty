import React from "react";
import { Route, Routes } from "react-router-dom";
import Random from "./Pages/Random";
import DETAILSCATEGORY from "./Pages/DetailsCategoryItem";
import CATEGORYITEM from "./Pages/CategoryItem";
import Home from "./Pages/Home";
import routes from "./config/routes";

const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.DETAILSCATEGORY} element={<DETAILSCATEGORY />} />
      <Route path={routes.CATEGORYITEM} element={<CATEGORYITEM />} />
      <Route path={routes.RANDOM} element={<Random />}></Route>
    </Routes>
  );
};

export default App;
