import React from "react";
import styled from "styled-components";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  .react-calendar {
    width: 500px;
    height: auto;
  }

  .react-calendar__tile {
    width: 80px !important;
    height: 80px !important;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  .react-calendar__tile div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-calendar__tile div.marked {
    background-color: #4caf50;
    color: white;
  }

  .react-calendar__tile--hasActive {
    background: #4caf50;
    color: white;
    border-radius: 50%;
  }

  .react-calendar__tile--hasActive:hover {
    background: #45a049;
  }

  .react-calendar__month-view {
    height: auto;
  }
`;

const Calendar = ({ selectedDate, onDateChange, schedules = [] }) => {
  const tileContent = ({ date }) => {
    const hasSchedule = schedules.includes(date.toISOString().split("T")[0]);

    return hasSchedule ? (
      <div style={{ color: "red", fontWeight: "bold" }}>⭐</div>
    ) : (
      <div></div>
    );
  };

  const handleDateChange = (date) => {
    onDateChange(date);
  };

  return (
    <CalendarContainer>
      <ReactCalendar
        value={selectedDate}
        onChange={handleDateChange}
        tileContent={tileContent}
      />
    </CalendarContainer>
  );
};

export default Calendar;
