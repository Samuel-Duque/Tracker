import React from "react";
import { Calendar } from "@nextui-org/calendar";
import { today, getLocalTimeZone } from "@internationalized/date";
const CalendarUI = () => {
  return (
    <Calendar
      showMonthAndYearPickers
      defaultValue={today(getLocalTimeZone())}
      maxValue={today(getLocalTimeZone())}
    />
  );
};

export default CalendarUI;
