import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const DetailList = () => {
  const token = process.env.REACT_APP_TOKEN;

  const { id } = useParams();
  const navigate = useNavigate();

  // 하나의 게시글의 상태를 관리하는 state
  const [detailList, setDetailList] = useState([]);

  // 뒤로가기
  const goBack = () => {
    navigate(-1);
  };

  // 클릭된 하나의 게시글 조회 요청
  const getDetailList = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(
        `https://recruit-api.yonple.com/recruit/${token}/a-posts/${id}`,
        {
          headers: headers,
        }
      );
      setDetailList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailList();
  }, []);

  return (
    <>
      <StDetailContainer>
        <h2>{detailList.title}</h2>
        <div>
          <p>{detailList.content}</p>
        </div>
      </StDetailContainer>
      <StBackButton onClick={goBack}>뒤로가기</StBackButton>
    </>
  );
};

const StDetailContainer = styled.div`
  margin: 5rem auto;
  border-width: 1px;
  padding: 2.5rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(229, 231, 235);
  line-height: 1.5;
  h2 {
    text-align: center;
    margin-bottom: 2.5rem;
    font-size: 2.25rem;
    line-height: 2.5srem;
  }
`;

const StBackButton = styled.button`
  padding: 0.75rem 2rem;
  background-color: rgba(59, 130, 246);
  color: rgba(255, 255, 255);
  font-weight: 500;
  border-radius: 0.375rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  cursor: pointer;
`;

export default DetailList;
