import React from "react";
import "./ScheduleCard.css";
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
      <div className="scard-container">
        <h1 className="text-2xl font-bold">Fibery Demo</h1>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} />
          <p className="">Polina Zenevich</p>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faCalendar} />
          <p className="">1:30pm - 2:15pm, Thursday, April 11, 2024</p>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon className="icon" icon={faEarthAmerica} />
          <p className="">India Standard Time</p>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faVideo} />
          <p className="">Web conferencing details to follow.</p>
        </div>
      </div>
    </div>
  );
}

export default ScheduleCard;
