import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const NaverMapContainer = styled.div`
  width: 1000px;
  height: 400px;
`;

const langOptions = [
  { value: "ko", label: "Korea" },
  { value: "en", label: "English" },
  { value: "ja", label: "Japan" },
  { value: "zh", label: "China" },
];

const NaverMap = () => {
  const mapElement = useRef(null); // 지도를 렌더링할 DOM 요소 참조
  const [language, setLanguage] = useState(langOptions[0].value);

  const loadNaverMap = () => {
    const existingScript = document.querySelector(
      `script[src^="https://oapi.map.naver.com/openapi/v3/maps.js"]`
    );
    if (existingScript) {
      document.head.removeChild(existingScript); // 기존 스크립트 제거
    }

    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=fvn01ozm0j&language=${language}`; // 네이버 클라이언트 ID와 언어 설정
    script.async = true;

    script.onload = () => {
      const { naver } = window;

      if (!naver) {
        console.error("네이버 지도 API가 로드되지 않았습니다.");
        return;
      }

      const mapOptions = {
        center: new naver.maps.LatLng(37.5665, 126.978), // 서울 시청 좌표
        zoom: 10, // 지도 확대 수준
      };

      // 새로운 지도 객체 생성
      new naver.maps.Map(mapElement.current, mapOptions);

      // 예제용 마커 추가
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5665, 126.978),
        map: mapElement.current,
        title: "서울 시청",
      });

      naver.maps.Event.addListener(marker, "click", () => {
        alert("서울 시청 마커 클릭!");
      });
    };

    script.onerror = () => {
      console.error("네이버 지도 API 스크립트 로드 실패");
    };

    document.head.appendChild(script); // 새로운 스크립트 추가
  };

  // 언어 변경 시 스크립트 다시 로드
  useEffect(() => {
    loadNaverMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value); // 언어 변경
  };

  return (
    <>
      <NaverMapContainer ref={mapElement}></NaverMapContainer>
      <select value={language} onChange={handleLanguageChange}>
        {langOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default NaverMap;
