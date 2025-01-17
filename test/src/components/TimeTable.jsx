import React from "react";
import styled from "styled-components";

const TimeTableContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-right: 20px;
`;

const Line = styled.div`
  width: 2px;
  background: #ccc;
  flex-grow: 1;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => (props.filled ? "#4CAF50" : "#fff")};
  border: 2px solid ${(props) => (props.filled ? "#4CAF50" : "#ccc")};
  margin: 5px 0;
`;

const ScheduleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const ScheduleItem = styled.div`
  background: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
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

const EmptySpace = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

const TimeTable = ({ date, schedules }) => {
  const filteredSchedules = schedules.filter(
    (schedule) => schedule.date === date.toISOString().split("T")[0]
  );

  return (
    <TimeTableContainer>
      <h2>{date.toDateString()}</h2>
      {filteredSchedules.length > 0 ? (
        filteredSchedules.map((schedule, index) => (
          <ScheduleContainer key={index}>
            <LineContainer>
              <Circle filled={true} />
              {index < filteredSchedules.length - 1 && <Line />}
            </LineContainer>
            <ScheduleItem>
              <ScheduleImage src={schedule.image} alt={schedule.title} />
              <ScheduleDetails>
                <h3>{schedule.title}</h3>
                <p>{schedule.address}</p>
                <p>{schedule.memo}</p>
                <p>{schedule.time}</p>
              </ScheduleDetails>
            </ScheduleItem>
          </ScheduleContainer>
        ))
      ) : (
        <EmptySpace>
          <LineContainer>
            <Circle filled={false} />
          </LineContainer>
          <p>일정이 없습니다.</p>
        </EmptySpace>
      )}
      {/* 마지막 빈 동그라미 */}
      <LineContainer>
        <Circle filled={false} />
      </LineContainer>
    </TimeTableContainer>
  );
};

export default TimeTable;
