import React, { useState } from "react";
import fibre1 from "./img/fibre1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "./DatePicker";
function FirstForm({ time, setTime, setStage }) {
  const [isDateSelected, setIsDateSelected] = useState(false);
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
    <div className=" mobile:flex-col tablet:flex-col laptop:flex-row  mt-10 flex w-2/3 mx-auto gap-5 items-center rounded-md shadow-[0_5px_15px_0_rgba(0,0,0,0.15)]  justify-center p-2  ">
      <div className="p-8 border-r border-gray-300 ">
        <div className="flex justify-center items-center py-3 ">
          <img className="h-24 " src={fibre1} />
        </div>
        <div className=" mt-10 border-t border-gray-300  ">
          <h1 className="  text-2xl font-bold mt-6 tablet:text-center tablet:text-3xl">
            Fibery Demo
          </h1>
          <div className="">
            <div className="flex justify-start items-center gap-2 py-5 tablet:justify-center ">
              <FontAwesomeIcon className="icon" icon={faClock} />
              <h4 className="text-lg ">45 min</h4>
            </div>
            <p className="p-container tablet:text-center ">
              Book a meeting with a product expert. We've helped hundreds of
              companies overcome product management challenges.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 ">
        <DatePicker
          setIsDateSelected={setIsDateSelected}
          selectedDay={time.date}
          setSelectedDay={(day) =>
            setTime({
              ...time,
              date: day,
            })
          }
        />
      </div>
      {isDateSelected ? (
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
                  <button
                    onClick={() => setStage("personal-details")}
                    className="text-white w-1/2 rounded-md p-3 bg-blue-700"
                  >
                    Next
                  </button>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default FirstForm;
