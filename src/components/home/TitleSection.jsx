import React from "react";
import styled from "styled-components";

const TitleSection = () => {
  return (
    <StTitle>
      <h1>솔리다리테 개발자 사전 과제</h1>
      <p>게시물을 검색해보세요</p>
    </StTitle>
  );
};

const StTitle = styled.div`
  text-align: center;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  h1 {
    font-size: 3.75rem;
    line-height: 1;
  }
  p {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 20px;
    color: rgba(107, 114, 128);
  }
`;

export default TitleSection;
