import React, { useState } from "react";
import InterestList from "../components/InterestList";
import Itinerary from "../components/Itinerary";

const MyTravel = () => {
  const [activeTab, setActiveTab] = useState("interest");
  return (
    <div>
      <h1>나의 여행</h1>
      <div>
        <button onClick={() => setActiveTab("interest")}>관심 리스트</button>
        <p>|</p>
        <button onClick={() => setActiveTab("calendar")}>여행 일정</button>
      </div>
      <div>
        {activeTab === "interest" && <InterestList />}
        {activeTab === "calendar" && <Itinerary />}
      </div>
    </div>
  );
};

export default MyTravel;
