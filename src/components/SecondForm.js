import React from "react";
import "./SecondForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCalendar } from "@fortawesome/free-solid-svg-icons";
import fibre1 from "./img/fibre1.png";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import ScheduleInfo from "./ScheduleInfo";

function SecondForm() {
  return (
    <div className="flex justify-center">
      <div className="sform-main-container">
        <div className="container1">
          <div className="img-container flex items-start justify-center gap-6 p-4">
            <button className="back-button">
              <FontAwesomeIcon className="left-icon" icon={faArrowLeft} />
            </button>
            <img className="h-24" src={fibre1} />
          </div>
          <div className="sform-text-div">
            <h1 className="text-2xl font-bold mt-6">Fibery Demo</h1>
            <div className="flex justify-start items-center gap-2 py-5 ">
              <FontAwesomeIcon className="icon" icon={faClock} />
              <h4>45 min</h4>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCalendar} />
              <div>
                <p>1:30pm - 2:30pm,Thursday</p>
                <p>April 11,2024</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-2 py-5 ">
              <FontAwesomeIcon className="icon" icon={faClock} />
              <h4>Indian Standard Time</h4>
            </div>
            <div>
              <p className="p-container">
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
