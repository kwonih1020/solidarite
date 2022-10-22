import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DetailList from "../detail/DetailList";

const ArticleBox = ({ search }) => {
  const token = process.env.REACT_APP_TOKEN;
  const navigate = useNavigate();

  // axios요청으로 불러온 Array을 상태관리를 통해 lists란 state에 넣어준다.
  const [lists, setLists] = useState([]);

  // 무한스크롤 페이지네이션
  const target = useRef(null);
  const [newLists, setNewLists] = useState([]);
  const [page, setPage] = useState(0);
  console.log(page);

  // filter와 includes를 이용해 배열 안에 있는 각 리스트들에 타이틀에 검색을 한 알파벳이나 단어가 포함되어 있는지 판단
  const filterTitle = newLists.filter((list) => {
    return list.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  // 게시글 리스트 조회 요청
  const articleLists = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(
        `https://recruit-api.yonple.com/recruit/${token}/a-posts?page=${page}`,
        { headers: headers }
      );
      setLists(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 무한스크롤
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage(page + 1);
        setNewLists([...newLists, ...lists]);
      }
    });
    if (target.current !== null) {
      observer.observe(target.current);
    }
    return () => {
      if (target.current !== null) {
        observer.unobserve(target.current);
      }
    };
  }, [lists, target, newLists.length]);

  useEffect(() => {
    articleLists();
  }, [page]);

  return (
    <StArticleLists>
      {/* 검색 input에 아무것도 입력이 안됐을때, 모둔 리스트 조회 */}
      {search === ""
        ? newLists &&
          newLists.map((list, i) => {
            return (
              <div
                className="listSection"
                key={i}
                onClick={() => {
                  navigate(`./${list.id}`);
                }}>
                <h3>
                  <span>{list.id}.</span> {list.title}{" "}
                </h3>
                <p>{list.content}</p>
              </div>
            );
          })
        : filterTitle.map((list, i) => (
            /* 검색 했을때 검색된 결과 조회 */
            <div
              className="listSection"
              key={i}
              onClick={() => {
                navigate(`./${list.id}`);
              }}>
              <h3>
                <span>{list.id}.</span> {list.title}{" "}
              </h3>
              <p>{list.content}</p>
            </div>
          ))}
      <StObserveContainer ref={target} />
    </StArticleLists>
  );
};

const StArticleLists = styled.div`
  margin-top: 30px;
  border-width: 1px;
  border-radius: 0.375rem;
  --tw-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  padding: 1.25rem;
  .listSection {
    padding: 1.25rem;
    transition-property: background-color, border-color, color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    h3 {
      font-size: 1.125rem;
      span {
        --tw-text-opacity: 1;
        color: rgba(59, 130, 246, var(--tw-text-opacity));
        font-weight: 500;
      }
    }
    p {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      margin-top: 5px;
      line-height: 2;
    }
  }
`;

const StObserveContainer = styled.div`
  height: 1px;
`;

export default ArticleBox;
