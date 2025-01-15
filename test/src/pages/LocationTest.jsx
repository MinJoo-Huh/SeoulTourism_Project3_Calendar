import React, { useEffect, useState } from "react";

const LocationTest = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/location.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch location data");
        }
        return response.json();
      })
      .then((data) => setLocations(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h1>서울 여행지 추천</h1>
      <div>
        {locations.map((location) => (
          <div
            key={location.id}
            style={{
              border: "1px solid #ddd",
              margin: "10px",
              padding: "10px",
            }}
          >
            <img
              src={location.image}
              alt={location.name}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <h2>{location.name}</h2>
            <p>{location.description}</p>
            <p>
              <strong>주소:</strong> {location.address}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationTest;
