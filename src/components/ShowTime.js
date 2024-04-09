import React from "react";
import "./ShowTime.css";

function ShowTime() {
  const Time = [
    {
      label: "1:30pm",
      value: "1:30pm",
    },
    {
      label: "1:30pm",
      value: "1:30pm",
    },
    {
      label: "1:30pm",
      value: "1:30pm",
    },
    {
      label: "1:30pm",
      value: "1:30pm",
    },
    {
      label: "1:30pm",
      value: "1:30pm",
    },
    {
      label: "1:30pm",
      value: "1:30pm",
    },
    {
      label: "1:30pm",
      value: "1:30pm",
    },

    {
      label: "1:30pm",
      value: "1:30pm",
    },

    {
      label: "1:30pm",
      value: "1:30pm",
    },

    {
      label: "1:30pm",
      value: "1:30pm",
    },

    {
      label: "1:30pm",
      value: "1:30pm",
    },

    {
      label: "1:30pm",
      value: "1:30pm",
    },

    {
      label: "1:30pm",
      value: "1:30pm",
    },

    {
      label: "1:30pm",
      value: "1:30pm",
    },

    {
      label: "1:30pm",
      value: "1:30pm",
    },
  ];
  return (
    <div className=" flex flex-col items-center gap-5 h-screen w-72 overflow-hidden overflow-y-scroll p-2">
      <h1 className="">Thursday,April 11</h1>
      {Time.map((item, index) => {
        return (
          <button
            key={`ahgdg${index}`}
            className=" border border-solid p-5 font-bold w-full text-blue-700 rounded-md border-blue-400 hover:outline-2 divide-solid  divide-blue-700"
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export default ShowTime;
