import { useState } from "react";
import "./App.css";
import CalendarTest from "./pages/CalendarTest";
import TimeTableTest from "./pages/TimeTableTest";
import LocationTest from "./pages/LocationTest";
import NaverMap from "./pages/NaverMap";
import { Route, Routes } from "react-router";
import { LanguageProvider } from "./components/LanguageContext";
import Header from "./components/Header";
import KakaoMap from "./pages/KakaoMap";
import Details from "./pages/Details";
import GoogleMap from "./pages/GoogleMaps";

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<NaverMap />} />
          <Route path="/calendar" element={<CalendarTest />} />
          <Route path="/timetable" element={<TimeTableTest />} />
          <Route path="/location" element={<LocationTest />} />
          <Route path="/kakaomap" element={<KakaoMap />} />
          <Route path="/details" element={<Details />} />
          <Route path="/googlemap" element={<GoogleMap />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
}

export default App;
