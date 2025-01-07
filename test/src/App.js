import { Route, Routes } from "react-router";
import "./App.css";
import CalendarTest from "./pages/CalendarTest";
import TimeTableTest from "./pages/TimeTableTest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CalendarTest />} />
      <Route path="/timetable" element={<TimeTableTest />} />
    </Routes>
  );
}

export default App;
