import React, { useEffect, useState } from "react";

const GoogleMapWithMarkers = ({ place, restaurants }) => {
  const [map, setMap] = useState(null);

  const apiKey = "AIzaSyBXLbr9864Nsz2MiEshdNVDSqnHmFgPcOA"; // 여기에 Google Maps API 키를 입력하세요.

  // Google Maps API 로드 함수
  const loadGoogleMapsScript = () => {
    return new Promise((resolve, reject) => {
      if (window.google && window.google.maps) {
        resolve(window.google.maps);
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;

      script.onload = () => resolve(window.google.maps);
      script.onerror = (error) => reject(error);

      document.head.appendChild(script);
    });
  };

  // 지도 초기화 및 마커 추가
  const initializeMap = () => {
    const mapElement = document.getElementById("map");
    if (!mapElement) return;

    const mapOptions = {
      center: { lat: place.lat, lng: place.lng },
      zoom: 16,
    };

    const newMap = new window.google.maps.Map(mapElement, mapOptions);
    setMap(newMap);

    // 레스토랑 마커 추가
    restaurants.forEach((restaurant) =>
      addMarker(newMap, restaurant, "restaurant")
    );

    // 주요 장소 마커 추가
    addMarker(newMap, place, "place");
  };

  // 마커 추가 함수
  const addMarker = (map, location, type) => {
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

    // 마커 클릭 이벤트
    marker.addListener("click", () => {
      alert(`You clicked on: ${location.title}`);
    });
  };

  // Google Maps API 로드 후 지도 초기화
  useEffect(() => {
    loadGoogleMapsScript()
      .then(() => initializeMap())
      .catch((error) => console.error("Google Maps API loading error:", error));
  }, []);

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
