import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GoogleMapWithMarkers = ({ place, restaurants }) => {
  const language = useSelector((state) => state.language.language);
  const [map, setMap] = useState(null);
  const apiKey = "AIzaSyBXLbr9864Nsz2MiEshdNVDSqnHmFgPcOA"; // 실제 API 키로 교체하세요.

  // Google Maps API 로드 함수
  const loadGoogleMapsScript = () => {
    return new Promise((resolve, reject) => {
      const existingScript = document.querySelector(
        "script[src*='maps.googleapis.com']"
      );
      if (existingScript) {
        resolve(); // 이미 로드된 경우 바로 리턴
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&language=${language}`;
      script.async = true;
      script.defer = true;

      script.onerror = (error) => reject(error); // 로딩 에러 처리
      script.onload = resolve; // 로드 성공 후 resolve
      document.head.appendChild(script);
    });
  };

  // 지도 초기화 및 마커 추가
  const initializeMap = () => {
    if (!place || !place.lat || !place.lng) {
      console.error("Place object is missing or invalid.");
      return; // place 객체가 올바르게 존재하는지 확인
    }

    if (window.google && window.google.maps) {
      const mapElement = document.getElementById("map");
      if (!mapElement) return;

      const mapOptions = {
        center: { lat: place.lat, lng: place.lng },
        zoom: 16,
      };

      const newMap = new window.google.maps.Map(mapElement, mapOptions);
      setMap(newMap);

      // 레스토랑 마커 추가
      if (restaurants && Array.isArray(restaurants)) {
        restaurants.forEach((restaurant) =>
          addMarker(newMap, restaurant, "restaurant")
        );
      }

      // 주요 장소 마커 추가
      addMarker(newMap, place, "place");
    } else {
      console.error("Google Maps API not loaded.");
    }
  };

  // 마커 추가 함수
  const addMarker = (map, location, type) => {
    if (!location.lat || !location.lng) {
      console.error("Invalid location data:", location);
      return;
    }

    const iconUrls = {
      place: "/images/redMarker.png",
      restaurant: "/images/redRestaurantMarker.png",
    };

    const iconSize =
      type === "place" ? { width: 40, height: 40 } : { width: 35, height: 35 };

    const marker = new window.google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map,
      title: location.title,
      icon: {
        url: iconUrls[type],
        scaledSize: new window.google.maps.Size(
          iconSize.width,
          iconSize.height
        ),
      },
    });

    marker.addListener("click", () => {
      alert(`You clicked on: ${location.title}`);
    });
  };

  // Google Maps API 로드 후 지도 초기화
  useEffect(() => {
    loadGoogleMapsScript()
      .then(() => {
        if (place && place.lat && place.lng) {
          initializeMap(); // place 객체가 유효할 때만 initializeMap 호출
        } else {
          console.error("Invalid place object.");
        }
      })
      .catch((error) => {
        console.error("Google Maps API loading error:", error);
      });
  }, [language, place]); // place 또는 language가 변경될 때마다 호출

  return (
    <div>
      <div
        id="map"
        style={{ width: "100%", height: "500px", marginTop: "20px" }}
      ></div>
    </div>
  );
};

export default GoogleMapWithMarkers;
