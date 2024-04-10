import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faEarthAmerica,
  faUser,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

function ScheduleCard() {
  return (
    <div className="flex justify-center mt-6">
      <div className=" mobile:w-full tablet:w-1/2 laptop:w-1/2 rounded p-3 flex flex-col w-1/2 gap-3 items-start border border-solid border-gray-600">
        <h1 className="text-2xl font-bold">Fibery Demo</h1>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} />
          <p className="text-gray-500 font-semibold">Polina Zenevich</p>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCalendar} />
          <p className="text-gray-500 font-semibold">
            1:30pm - 2:15pm, Thursday, April 11, 2024
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon className="icon" icon={faEarthAmerica} />
          <p className="text-gray-500 font-semibold">India Standard Time</p>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faVideo} />
          <p className="text-gray-500 font-semibold">
            Web conferencing details to follow.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ScheduleCard;
