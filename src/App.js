import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsCategory from "./Pages/DetailsCategory";
import Random from "./Pages/Random";

import Home from "./Pages/Home";
import routes from "./config/routes";

const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.DETAILSCATEGORY} element={<DetailsCategory />} />
      <Route path={routes.RANDOM} element={<Random />}></Route>
    </Routes>
  );
};

export default App;
