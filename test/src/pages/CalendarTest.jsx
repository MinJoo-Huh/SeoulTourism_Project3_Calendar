import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimeTableTest from "./TimeTableTest";

const CalendarTest = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 날짜별 타임테이블 데이터
  const timetableData = {
    "2025-01-07": [
      { time: "09:00 - 10:00", task: "Team Meeting" },
      { time: "11:00 - 12:00", task: "Code Review" },
    ],
    "2025-01-08": [
      { time: "10:00 - 11:00", task: "Client Presentation" },
      { time: "13:00 - 14:00", task: "Lunch with Team" },
    ],
  };

  return (
    <div>
      <p>Calendar</p>
      <Calendar />
      {/* <TimeTableTest date={selectedDate} data={}/> */}
    </div>
  );
};

export default CalendarTest;
