import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimeTableTest from "./TimeTableTest";
import styled, { ThemeProvider } from "styled-components";
import dayjs from "dayjs";

const theme = {
  color: {
    pink: "#ffcccc",
    brown: "#8b4513",
    lightPink: "#ffe6e6",
    blue: "#add8e6",
    lime: "#bfff00",
  },
};

const CalendarTest = () => {
  const curDate = new Date();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeMonth, setActiveMonth] = useState(dayjs().startOf("month"));
  const activeDate = dayjs(selectedDate).format("YYYY-MM-DD");

  const timetableData = {
    "2025-01-07": [
      { time: "09:00 - 10:00", task: "Team Meeting" },
      { time: "11:00 - 12:00", task: "Code Review" },
    ],
    "2025-01-08": [
      { time: "10:00 - 11:00", task: "Client Presentation" },
      { time: "13:00 - 14:00", task: "Lunch with Team" },
    ],
    "2024-12-31": [
      { time: "10:00 - 11:00", task: "Client Presentation" },
      { time: "13:00 - 14:00", task: "Lunch with Team" },
    ],
  };

  const addContent = ({ date, view }) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    return timetableData[formattedDate] ? <span>📌</span> : null;
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleMonthChange = ({ activeStartDate }) => {
    setActiveMonth(dayjs(activeStartDate).startOf("month"));
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const isSameMonth = dayjs(date).isSame(activeMonth, "month");
      return isSameMonth ? "" : "other-month"; // 다른 달의 날짜에 'other-month' 클래스 적용
    }
    return null;
  };

  const tasksForDate = timetableData[activeDate] || [];

  return (
    <ThemeProvider theme={theme}>
      <CalendarContainer>
        <p>Calendar</p>
        <StyledCalendar
          onChange={handleDateChange}
          value={selectedDate}
          tileContent={addContent}
          tileClassName={tileClassName}
          onActiveStartDateChange={handleMonthChange}
        />
      </CalendarContainer>

      {/* <TimeTableTest tasks={tasksForDate} /> */}
    </ThemeProvider>
  );
};

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f9f9;
`;

const StyledCalendar = styled(Calendar)`
  /* 전체 Calendar 스타일 */
  width: 500px;
  height: auto;
  max-width: 45vw;
  max-height: 67.5vw;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  font-family: Arial, sans-serif;

  /* Navigation 스타일 */
  .react-calendar__navigation {
    background: ${({ theme }) => theme.color.pink};
    border-bottom: 2px solid ${({ theme }) => theme.color.brown};
    height: 45px;
    border-radius: 10px 10px 0 0;

    button {
      background: none;
      border: none;
      font-size: 12px;
      color: ${({ theme }) => theme.color.brown};
      font-weight: 600;
      &:enabled:hover,
      &:enabled:focus {
        background-color: ${({ theme }) => theme.color.pink};
        border-radius: 10px 10px 0 0;
        cursor: pointer;
      }
      &:disabled {
        background-color: ${({ theme }) => theme.color.pink};
      }
    }

    /* 날짜 */
    span {
      font-size: 18px;
      font-weight: 600;
      color: ${({ theme }) => theme.color.brown};
    }
  }

  /* 기타 섹션 스타일 */
  .react-calendar__month-view__days__day {
    &:hover {
      background-color: ${({ theme }) => theme.color.lightPink};
    }
  }

  /* 월 달력 (Navigation 제외) */
  .react-calendar__month-view {
    padding: 6px 16px;
    abbr {
      color: ${({ theme }) => theme.color.brown};
      font-size: 12px;
      font-weight: 500;
    }
  }

  /* 요일 */
  .react-calendar__month-view__weekdays {
    abbr {
      font-size: 14px;
      font-weight: 900;
    }
  }

  /* 일 (각 타일) */
  .react-calendar__tile {
    text-align: center;
    height: calc(100% / 6);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  /* hover, focus, 선택됐을 시 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: ${({ theme }) => theme.color.blue};
    border-radius: 7px;
  }

  .react-calendar__tile--now {
    background: ${({ theme }) => theme.color.lime};
    border-radius: 7px;
  }

  /* hover, focus 시 */
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${({ theme }) => theme.color.blue};
    border-radius: 7px;
  }

  .other-month {
    opacity: 0.4;
  }
`;

export default CalendarTest;
