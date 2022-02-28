import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsCategory from "./Pages/DetailsCategory";
import Random from "./Pages/Random";

import Home from "./Pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/DetailsCategory/:id" element={<DetailsCategory />} />
      <Route path="/Random/:id" element={<Random />}></Route>
    </Routes>
  );
};

export default App;
