import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dataprive from "../page/dataprive";

const Routers = () => {
  useEffect(() => {
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dataprive />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
