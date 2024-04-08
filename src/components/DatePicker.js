import React, { useState } from "react";
import "./DatePicker.css";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
const DatePicker = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const disableDays = [
    new Date(2024, 3, 13),
    new Date(2024, 3, 14),
    new Date(2024, 3, 20),
    new Date(2024, 3, 21),
    new Date(2024, 3, 27),
    new Date(2024, 3, 28),
    { from: new Date(2024, 3, 6), to: new Date(2024, 3, 7) },
  ];

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };
  const Timezone = Intl.supportedValuesOf("timeZone");
  console.log(Timezone);
  const Day = selectedDay ? <p>{format(selectedDay, "PPP")}.</p> : "";
  return (
    <>
      <h1 className="text-xl font-bold">Select Date And Time</h1>
      <DayPicker
        defaultMonth={new Date()}
        fromMonth={new Date()}
        toMonth={new Date(2024, 5, 31)}
        disabled={disableDays}
        mode="single"
        selected={selectedDay}
        onDayClick={handleDayClick}
        footer={Day}
      />
      <div className="timezone-wrapper flex justify-center items-center gap-3 p-1">
        <div className="select-wrapper flex justify-center items-center p-2  ">
          {/* label for timezone */}
          {/* <label className="font-bold">Time Zone:-</label> */}
          <FontAwesomeIcon icon={faEarthAmerica} />
          <select className="select-timezone outline-none " id="id">
            {Timezone.map((string, id) => {
              return <option>{string}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
