import React from "react";
import "./SecondForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCalendar } from "@fortawesome/free-solid-svg-icons";
import fibre1 from "./img/fibre1.png";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import ScheduleInfo from "./ScheduleInfo";

function SecondForm({ time, setTime, setStage }) {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const date = new Date(time.date);
  const withAddedMinutes = date.getTime() + 45 * 60000;
  console.log("start", date.getTime());
  console.log("withAddedMinutes", withAddedMinutes);
  const formattedTime = new Date(withAddedMinutes);
  // console.log("formattedTime", formattedTime);
  const finalTime = `${formattedTime.getHours()}:${formattedTime.getMinutes()}${
    formattedTime.getHours() > 12 ? "AM" : "PM"
  }`;
  // console.log("ftime", `${formattedTime.getHours()}:${formattedTime.getMinutes()}${formattedTime.getHours() > 12 ? "AM":'PM'}`);
  return (
    <div className="flex justify-center  ">
      <div className="rounded-md overflow-y-scroll h-screen mobile:flex-col tablet:flex-col laptop:flex-row  flex gap-32  w-9/12 mobile:w-96 tablet:w-96 laptop:w-9/12 p-2.5 shadow-[0_5px_15px_0_rgba(0,0,0,0.15)]">
        <div className=" w-80 p-1.5  flex flex-col items-start  ">
          <div className="img-container  flex items-start justify-center gap-6 p-4">
            <button className="border border-solid  rounded-full w-10 h-10 border-slate-300 hover:bg-sky-100 hover:cursor-pointer  ">
              <FontAwesomeIcon
                className=" text-blue-700 font-bold text-lg"
                icon={faArrowLeft}
              />
            </button>
            <img className="h-24  " src={fibre1} />
          </div>
          <div className="">
            <h1 className="text-2xl  font-bold mt-6">Fibery Demo</h1>
            <div className="flex justify-start items-center gap-2 py-5 ">
              <FontAwesomeIcon className="icon" icon={faClock} />
              <h4>45 min</h4>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCalendar} />
              <div>
                <p>
                  {finalTime},{weekdays[formattedTime.getDay()]}{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 py-5 ">
              <FontAwesomeIcon className="icon" icon={faClock} />
              <h4>Indian Standard Time</h4>
            </div>
            <div>
              <p className="text-lg font-normal pb-5 text-gray-600">
                Book a meeting with a product expert. We've helped hundreds of
                companies overcome product management challenges.{" "}
              </p>
            </div>
          </div>
          <div className="mt-40">
            <a href="" className="cookies">
              Cookies
            </a>
          </div>
        </div>
        <ScheduleInfo />
      </div>
    </div>
  );
}

export default SecondForm;
