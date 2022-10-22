import React from "react";
import styled from "styled-components";

const GlobalLayout = ({ children }) => {
  return <GlobalLayoutContainer>{children}</GlobalLayoutContainer>;
};

const GlobalLayoutContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding: 2.5rem;
  width: 1000px;
  /* @media (max-width: 767px) {

  }
  @media (min-width: 768px) and (max-width: 1023px) {

  } */
`;

export default GlobalLayout;
