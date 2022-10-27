import React, { useState, useRef } from "react";
import styled from "styled-components";

import ArticleBoxA from "./ArticleBoxA";
import ArticleBoxB from "./ArticleBoxB";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  // icon을 dom에서 지정
  const iconFocus = useRef(null);
  // icon 클릭시 focus
  const iconClickFocus = () => {
    iconFocus.current.focus();
  };

  // 검색과 동시에 결과 조회
  const [search, setSearch] = useState("");
  const searchOnChange = (e) => {
    setSearch(e.target.value);
  };

  // POST A || B 탭UI 상태관리
  const [types, setTypes] = useState("a");
  const clickType = (param) => {
    if (types === param) {
      setTypes(param);
    } else {
      setTypes(param);
    }
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
      <StTabContainer>
        <div className="type typeA" onClick={() => clickType("a")}>
          A Posts
        </div>
        <div className="type typeB" onClick={() => clickType("b")}>
          B Posts
        </div>
      </StTabContainer>
      {types === "a" ? (
        <ArticleBoxA search={search} types={types} />
      ) : types === "b" ? (
        <ArticleBoxB search={search} types={types} />
      ) : null}
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
      &:hover {
        border-color: blue;
      }
    }
  }
`;

const StTabContainer = styled.div`
  border-bottom-width: 1px;
  margin-bottom: 0.5rem;
  display: flex;
  border-bottom: 1px solid rgba(229, 231, 235);
  .type {
    padding: 0.75rem;
    transition-property: background-color, border-color, color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    border-radius: 0.25rem;
    outline: transparent solid 2px;
    outline-offset: 2px;
    appearance: none;
    font-weight: 500;
    cursor: pointer;
    &.active {
      background-color: lightblue;
    }
  }
`;

export default SearchBar;
