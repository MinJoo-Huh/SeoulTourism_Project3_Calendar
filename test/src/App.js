import { Route, Routes } from "react-router";
import "./App.css";
import Calendar from "./pages/Calendar";
import TimeTable from "./pages/TimeTable";

function App() {
  return (
    <Routes>
      <Route Path="/" element={<Calendar />} />
      <Route Path="/timetable" element={<TimeTable />} />
    </Routes>
  );
}

export default App;
