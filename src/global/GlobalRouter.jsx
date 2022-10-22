// eslint-disable-next-line

import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";

const GlobalRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
};

export default GlobalRouter;
