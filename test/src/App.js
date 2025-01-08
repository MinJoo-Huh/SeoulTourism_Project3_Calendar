import { Route, Routes } from "react-router";
import "./App.css";
import CalendarTest from "./pages/CalendarTest";
import TimeTableTest from "./pages/TimeTableTest";
import LocationTest from "./pages/LocationTest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CalendarTest />} />
      <Route path="/timetable" element={<TimeTableTest />} />
      <Route path="/location" element={<LocationTest />} />
    </Routes>
  );
}

export default App;
