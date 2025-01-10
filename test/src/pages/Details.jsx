import React, { useState } from "react";
import NaverMap from "./NaverMap";
import GoogleMaps from "./GoogleMaps";

const langOptions = [
  { value: "ko", label: "Korea" },
  { value: "en", label: "English" },
  { value: "ja", label: "Japan" },
  { value: "zh", label: "China" },
];

const Details = () => {
  const [language, setLanguage] = useState(langOptions[0].value);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // 마커 생성
  const place = {
    lat: 37.5665,
    lng: 126.978,
    title: "서울 시청",
  };

  const restaurants = [
    { lat: 37.5633, lng: 126.9853, title: "명동교자" },
    { lat: 37.5703, lng: 126.9976, title: "광장시장" },
    { lat: 37.5652, lng: 126.9779, title: "팔선" },
    { lat: 37.5631, lng: 126.9786, title: "백리향" },
    { lat: 37.5707, lng: 126.9783, title: "광화문집" },
    { lat: 37.5706, lng: 126.9753, title: "토속촌" },
    { lat: 37.5558, lng: 126.9731, title: "서울역 한옥집" },
    { lat: 37.5618, lng: 126.9766, title: "한양옥" },
    { lat: 37.5641, lng: 126.9843, title: "명동밀면" },
    { lat: 37.5662, lng: 126.9783, title: "서울식당" },
  ];

  return (
    <div>
      <GoogleMaps place={place} restaurants={restaurants} />
      <select value={language} onChange={handleLanguageChange}>
        {langOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>{language}</p>
    </div>
  );
};

export default Details;
