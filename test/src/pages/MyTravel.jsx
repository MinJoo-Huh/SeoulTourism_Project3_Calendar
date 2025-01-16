import React, { useState } from "react";
import styled from "styled-components";
import InterestList from "../components/InterestList";
import Itinerary from "../components/Itinerary";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  p {
    font-size: 20px;
    margin: 0 40px;
  }
`;

const TabButton = styled.button`
  background: ${(props) => (props.active ? "gray" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  font-size: 1rem;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: ${(props) => (props.active ? "#555" : "#ddd")};
  }
`;

const MyTravel = () => {
  const [activeTab, setActiveTab] = useState("interest");

  return (
    <Container>
      <Title>나의 여행</Title>
      <Tabs>
        <TabButton
          active={activeTab === "interest"}
          onClick={() => setActiveTab("interest")}
        >
          관심 리스트
        </TabButton>
        <p>|</p>
        <TabButton
          active={activeTab === "calendar"}
          onClick={() => setActiveTab("calendar")}
        >
          여행일정
        </TabButton>
      </Tabs>
      <div>
        {activeTab === "interest" && <InterestList />}
        {activeTab === "calendar" && <Itinerary />}
      </div>
    </Container>
  );
};

export default MyTravel;
