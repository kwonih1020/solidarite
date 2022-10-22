import React, { useState } from "react";
import styled from "styled-components";

import ArticleBox from "./ArticleBox";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const searchOnChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <StSearchContainer>
        <input type="text" value={search} onChange={searchOnChange} />
      </StSearchContainer>
      <ArticleBox search={search} />
    </>
  );
};

const StSearchContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 24rem;
  input {
    outline: transparent solid 2px;
    outline-offset: 2px;
    appearance: none;
    flex: 1 1 auto;
  }
`;

export default SearchBar;
