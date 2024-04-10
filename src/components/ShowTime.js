import React, { useState } from "react";
import "./ShowTime.css";

function ShowTime({ time, setTime }) {
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(undefined);

  const Time = [
    {
      label: "1:30pm",
      value: "1:30pm",
    },

    {
      label: "2:00pm",
      value: "2:00pm",
    },

    {
      label: "3:00pm",
      value: "3:00pm",
    },

    {
      label: "3:30pm",
      value: "3:30pm",
    },

    {
      label: "4:00pm",
      value: "4:00pm",
    },

    {
      label: "4:30pm",
      value: "4:30pm",
    },
  ];
  return (
    <div className=" w-[1000px] flex flex-col items-center gap-5  overflow-hidden overflow-y-scroll p-2">
      <h1 className="text-lg font-normal">Thursday,April 11</h1>
      {Time.map((item, index) => {
        return (
          <div
            key={`time-${index}`}
            className="flex items-center justify-between gap-4"
          >
            <button
              onClick={() => {
                setSelectedTimeIndex(index);
                setTime({ ...time, time: item.value });
              }}
              key={`ahgdg${index}`}
              className=" border border-solid p-3 font-bold w-full text-blue-700 rounded-md border-blue-400 hover:outline-2  hover:outline hover:outline-blue-800"
            >
              {item.label}
            </button>
            {selectedTimeIndex === index ? (
              <button className="text-white w-1/2 rounded-md p-3 bg-blue-700">
                Next
              </button>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ShowTime;
