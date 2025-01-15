import React from "react";

const TimeTableTest = () => {
  if (!data || data.length === 0) {
    return <p>No schedule for {date}.</p>;
  }

  return (
    <div>
      <h3>Schedule for {date}</h3>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Time</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Task</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {item.time}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {item.task}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTableTest;
