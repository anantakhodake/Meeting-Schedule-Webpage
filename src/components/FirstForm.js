import React from "react";
import "./FirstForm.css";
import fibre1 from "./img/fibre1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "./DatePicker";
function FirstForm() {
  return (
    <div className="flex w-3/5 mx-auto gap-5 items-center rounded-md shadow-[0_5px_15px_0_rgba(0,0,0,0.15)]  justify-center p-2">
      <div className=" p-8 w-1/2 border-r border-gray-300">
        <div className="flex justify-center items-center py-3 ">
          <img className="h-24 " src={fibre1} />
        </div>
        <div className=" mt-10 border-t border-gray-300 ">
          <h1 className="text-2xl font-bold mt-6">Fibery Demo</h1>
          <div className="">
            <div className="flex justify-start items-center gap-2 py-5 ">
              <FontAwesomeIcon className="icon" icon={faClock} />
              <h4>45 min</h4>
            </div>
            <p className="p-container">
              Book a meeting with a product expert. We've helped hundreds of
              companies overcome product management challenges.{" "}
            </p>
          </div>
        </div>
        <div className="mt-10">
          <a href="" className="cookies">
            Cookies
          </a>
        </div>
      </div>
      <div className="w-1/2">
        <DatePicker />
      </div>
    </div>
  );
}

export default FirstForm;
