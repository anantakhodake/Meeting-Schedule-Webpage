import React from "react";
import "./Scheduled.css";
import logo from "./img/logo.jpg";
import succesful from "./img/succesful.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Scheduled() {
  return (
    <div className="schedule-container">
      <div className=" flex schedule-fcontainer">
        <img className="logo-img h-20 w-20" src={logo} alt="" />

        <div className="flex gap-2 items-center">
          <img className="h-7" src={succesful} alt="" />
          <h1 className=" text-xl font-bold">You are Scheduled</h1>
        </div>
        <p className="p-container mt-2 ">
          A calendar invitation has been sent to your email address.
        </p>
        <button className="schedule-btn">
          Open Invitation <FontAwesomeIcon icon={faCheck} />
        </button>
      </div>
    </div>
  );
}

export default Scheduled;
