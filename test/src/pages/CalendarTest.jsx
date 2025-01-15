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
  const [selectedDate, setSelectedDate] = useState(new Date());
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
  };

  const addContent = ({ date, view }) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    return timetableData[formattedDate] ? <span>📌</span> : null;
  };

  const tasksForDate = timetableData[activeDate] || [];

  return (
    <ThemeProvider theme={theme}>
      <CalendarContainer>
        <p>Calendar</p>
        <StyledCalendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileContent={addContent}
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
  width: 1000px;
  // height: 800px;
  max-width: 90vw;
  max-height: 90vw;
  border: none;
  border-radius: 20px;
  overflow: hidden;
  font-family: Arial, sans-serif;

  /* Navigation 스타일 */
  .react-calendar__navigation {
    background: ${({ theme }) => theme.color.pink};
    border-bottom: 4px solid ${({ theme }) => theme.color.brown};
    height: 90px;
    border-radius: 20px 20px 0 0;

    button {
      background: none;
      border: none;
      font-size: 16px;
      color: ${({ theme }) => theme.color.brown};
      font-weight: 600;
      &:enabled:hover,
      &:enabled:focus {
        background-color: ${({ theme }) => theme.color.pink};
        border-radius: 20px 20px 0 0;
        cursor: pointer;
      }
      &:disabled {
        background-color: ${({ theme }) => theme.color.pink};
      }
    }

    /* 날짜 */
    span {
      font-size: 24px;
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

  /*월 달력 (Navigation 제외)*/
  .react-calendar__month-view {
    padding: 12px 32px;
    abbr {
      // 텍스트
      color: ${({ theme }) => theme.color.brown};
      font-size: 16px;
      font-weight: 500;
    }
  }

  /*요일*/
  .react-calendar__month-view__weekdays {
    abbr {
      // 텍스트 부분
      font-size: 23px;
      font-weight: 900;
    }
  }

  /*일 (각 타일)*/
  .react-calendar__tile {
    text-align: center;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  /*hover, focus, 선택됐을 시 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: ${({ theme }) => theme.color.blue};
    border-radius: 14px;
  }

  .react-calendar__tile--now {
    background: ${({ theme }) => theme.color.lime};
    border-radius: 14px;
  }
  /*hover, focus 시 */
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${({ theme }) => theme.color.blue};
    border-radius: 14px;
  }
`;

export default CalendarTest;
