import React, { useState, useRef } from "react";
import styled from "styled-components";

import ArticleBox from "./ArticleBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const iconFocus = useRef(null);

  const [search, setSearch] = useState("");
  const searchOnChange = (e) => {
    setSearch(e.target.value);
  };

  const iconClickFocus = () => {
    iconFocus.current.focus();
  };

  return (
    <>
      <StSearchContainer>
        <div className="searchSection">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="searchIcon"
            onClick={iconClickFocus}
          />
          <input
            type="text"
            value={search}
            onChange={searchOnChange}
            placeholder="검색어를 입력하세요"
            ref={iconFocus}
          />
        </div>
      </StSearchContainer>
      <ArticleBox search={search} />
    </>
  );
};

const StSearchContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 24rem;
  .searchSection {
    position: relative;
    .searchIcon {
      width: 14px;
      height: 14px;
      position: absolute;
      top: 17px;
      left: 10px;
    }
    input {
      outline: transparent solid 2px;
      outline-offset: 2px;
      appearance: none;
      flex: 1 1 auto;
      border: none;
      text-indent: 15px;
      border-width: 1px;
      padding: 1rem;
      border-radius: 0.25rem;
      display: flex;
      border: 1px solid rgba(229, 231, 235);
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      width: 100%;
      &:focus {
        outline: none;
        border-color: blue;
      }
    }
  }
`;

export default SearchBar;
