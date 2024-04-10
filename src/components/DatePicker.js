import React, { useState } from "react";
import "./DatePicker.css";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
const DatePicker = ({ setIsDateSelected, selectedDay, setSelectedDay }) => {
  const disableDays = [
    new Date(2024, 3, 13),
    new Date(2024, 3, 14),
    new Date(2024, 3, 20),
    new Date(2024, 3, 21),
    new Date(2024, 3, 27),
    new Date(2024, 3, 28),
    { from: new Date(2024, 3, 6), to: new Date(2024, 3, 7) },
  ];
  // const [selectedDay,setSelectedDay]= useState(false);

  const Timezone = Intl.supportedValuesOf("timeZone");

  const Day = selectedDay ? <p>{format(selectedDay, "PPP")}.</p> : "";

  return (
    <>
      <div className="mobile:justify-center  tablet:justify-center">
        <h1 className=" mobile:text-center tablet:text-center text-xl font-bold">
          Select Date And Time
        </h1>
        <DayPicker
          defaultMonth={new Date()}
          fromMonth={new Date()}
          toMonth={new Date(2024, 5, 31)}
          disabled={disableDays}
          mode="single"
          selected={selectedDay}
          onSelect={setSelectedDay}
          footer={Day}
          onDayClick={(e) => {
            setIsDateSelected(true);
          }}
        />
      </div>
      <div className="timezone-wrapper flex justify-center items-center gap-3 p-1">
        <div className="select-wrapper flex justify-center items-center p-2 hover:bg-sky-100 hover:cursor-pointer hover:rounded-md  ">
          {/* label for timezone */}
          {/* <label className="font-bold">Time Zone:-</label> */}
          <FontAwesomeIcon icon={faEarthAmerica} />
          <select
            className="select-timezone w-96 outline-none hover:bg-sky-100 hover:cursor-pointer"
            id="id"
          >
            {Timezone.map((string, id) => {
              return <option key={`test-${id}`}>{string}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
