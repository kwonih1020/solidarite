import React from "react";

import TitleSection from "../components/home/TitleSection";
import SearchBar from "../components/home/SearchBar";
import ArticleBox from "../components/home/ArticleBox";

const HomePage = () => {
  return (
    <>
      <TitleSection />
      <SearchBar />
      <ArticleBox />
    </>
  );
};

export default HomePage;
