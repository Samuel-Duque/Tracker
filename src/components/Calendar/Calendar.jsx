import React, { useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

export default function CalendarUI({ onChange }) {
  const [data, setData] = React.useState(new Date());

  const handleDateChange = (newDate) => {
    setData(newDate);
    onChange(newDate);
  };

  return (
    <div>
      <Calendar className="calendar" onChange={handleDateChange} value={data} />
    </div>

  );
};

export default CalendarUI;
