import React from "react";
import "./ScheduleInfo.css";

function ScheduleInfo() {
  return (
    // This div wrap all the schedule information
    <div className="schedule-info-wrapper">
      <div className="p-info">
        <h1 className="text-2xl font-bold py-3 ">Enter Details</h1>
        {/* Here the user can enter the name */}
        <div className="name-wrapper">
          <label className="text-xl font-semibold" for="name">
            Name: <span>*</span>
          </label>
          <input className="name-input" type="text" required />
        </div>
        {/* here user can enter the email */}
        <div className="name-wrapper">
          <label className="text-xl font-semibold" for="name">
            Email: <span>*</span>
          </label>
          <input className="name-input" type="text" required />
          <button className="g-btn mt-2">Add Guests</button>
          {/* here user can select the checkbox */}
          <p className="text-xl font-semibold mt-5">
            I want Fibery to work for: *
          </p>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className="check-box" />
            <p className="text-lg">Myself</p>
          </div>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className="check-box" />
            <p className="text-lg"> 10 People</p>
          </div>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className="check-box" />
            <p className="text-lg">10-50 People</p>
          </div>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className="check-box" />
            <p className="text-lg">50 + People</p>
          </div>
          {/* also here user can select the checkbox */}
          <p className="text-xl font-semibold mt-5">
            Please, choose up to three options. You are more interested in: *
          </p>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className="check-box" />
            <p className="">Strategy</p>
          </div>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className="check-box" />
            <p className=""> Product Management</p>
          </div>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className="check-box" />
            <p className="">Engineering</p>
          </div>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className="check-box" />
            <p className="">Feedback Management</p>
          </div>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className="check-box" />
            <p className="">Sometimes Else</p>
          </div>

          <div className="name-wrapper mt-5">
            <label className="text-xl font-semibold" for="name">
              Please, share anything that will help prepare for our meeting.{" "}
              <span>*</span>
            </label>
            <textarea
              id="message"
              className="text-field"
              name="message"
              rows="3"
              cols="40"
            ></textarea>
          </div>
          <div className="name-wrapper mt-5">
            <label className="text-xl font-semibold" for="name">
              Please, share with us the name of your Fibery workspace (if any){" "}
              <span>*</span>
            </label>
            <input className="name-input" type="text" required />
          </div>

          <p className="mt-5">
            By proceeding, you confirm that you have read and agree to
            <span className="">
              <a className="footer-a" href="">
                {" "}
                Calendly's Terms of Use
              </a>
            </span>{" "}
            and
            <span>
              <a href="" className="footer-a">
                {" "}
                Privacy Notice.
              </a>
            </span>
          </p>
          {/* footer button for schedule the event */}
          <button className="footer-btn">Schedule Event</button>
        </div>
      </div>
    </div>
  );
}

export default ScheduleInfo;
