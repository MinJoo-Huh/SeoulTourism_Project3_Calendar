import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background: #f9f9f9; // 임시
  border-radius: 10px;
`;

const InterestList = () => {
  return (
    <Container>
      {/* <h1>관심 리스트</h1> */}
      <p>여기에 관심 리스트가 표시됩니다.</p>
    </Container>
  );
};

export default InterestList;
