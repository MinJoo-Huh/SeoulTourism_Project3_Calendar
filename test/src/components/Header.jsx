import React, { useState } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Header = () => {
  const [language, setLanguage] = useState("ko");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <HeaderContainer>
        <h2>This is Header</h2>
        <select onChange={handleLanguageChange}>
          <option value="ko">한국어</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
          <option value="zh">中文</option>
        </select>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Header;
