import React from "react";
import styled from "styled-components";
import AddScheduleModal from "./AddScheduleModal";

const TimeTableContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ScheduleItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background: #f0f0f0;
  border-radius: 5px;
`;

const ScheduleImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 5px;
`;

const ScheduleDetails = styled.div`
  flex: 1;
`;

const TimeTable = ({ date, schedules }) => {
  console.log("schedules: ", schedules);
  const filteredSchedules = schedules.filter(
    (schedule) => schedule.date === date.toISOString().split("T")[0]
  );

  return (
    <TimeTableContainer>
      <h2>{date.toDateString()}</h2>
      {filteredSchedules.map((schedule, index) => (
        <ScheduleItem key={index}>
          <ScheduleImage src={schedule.image} alt={schedule.title} />
          <ScheduleDetails>
            <h3>{schedule.title}</h3>
            <p>{schedule.address}</p>
            <p>{schedule.memo}</p>
            <p>{schedule.time}</p>
          </ScheduleDetails>
        </ScheduleItem>
      ))}
    </TimeTableContainer>
  );
};

export default TimeTable;
