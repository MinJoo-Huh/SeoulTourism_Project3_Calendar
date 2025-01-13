import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import styled from "styled-components";
import { setLanguage } from "../features/languageSlice";

const Header = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language); // state.action.state_name

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  console.log(language);
  return (
    <>
      <HeaderContainer>
        <h2>This is Header</h2>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="ko">한국어</option>
          <option value="ja">日本語</option>
          <option value="zh">中文</option>
        </select>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export default Header;
