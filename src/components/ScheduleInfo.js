import React from "react";
function ScheduleInfo() {
  return (
    // This div wrap all the schedule information
    <div className="schedule-info-wrapper">
      <div className=" flex flex-col gap-8 p-3">
        <h1 className="text-2xl font-bold py-3 ">Enter Details</h1>
        {/* Here the user can enter the name */}
        <div className=" flex flex-col gap-5 ">
          <label className="text-lg font-semibold" for="name">
            Name: <span>*</span>
          </label>
          <input
            className=" mobile:w-full tablet:w-full laptop:w-1/2 outline-2 outline outline-black-300 rounded-md p-3 w-1/2 focus:outline focus:outline-2 focus:outline-sky-500 "
            type="text"
            required
          />
        </div>
        {/* here user can enter the email */}
        <div className=" flex flex-col gap-5">
          <label className="text-xl font-semibold" for="name">
            Email: <span>*</span>
          </label>
          <input
            className=" mobile:w-full tablet:w-full laptop:w-1/2 outline-2 outline outline-black-300 rounded-md p-3 w-1/2  focus:outline focus:outline-2 focus:outline-sky-500"
            type="text"
            required
          />
          <button className=" border-solid border border-sky-700 p-2 w-40 text-sky-700 rounded-3xl mt-2  hover:bg-sky-100 hover:cursor-pointer">
            Add Guests
          </button>
          {/* here user can select the checkbox */}
          <p className="text-xl font-semibold mt-5">
            I want Fibery to work for: *
          </p>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className=" scale-150" />
            <p className="text-lg">Myself</p>
          </div>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className="scale-150" />
            <p className="text-lg"> 10 People</p>
          </div>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className="scale-150" />
            <p className="text-lg">10-50 People</p>
          </div>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className="scale-150" />
            <p className="text-lg">50 + People</p>
          </div>
          {/* also here user can select the checkbox */}
          <p className="text-xl font-semibold mt-5">
            Please, choose up to three options. You are more interested in: *
          </p>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className=" scale-150" />
            <p className="">Strategy</p>
          </div>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className="scale-150" />
            <p className=""> Product Management</p>
          </div>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className="scale-150" />
            <p className="">Engineering</p>
          </div>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className="scale-150" />
            <p className="">Feedback Management</p>
          </div>
          <div className="checkbox flex items-center gap-3">
            <input type="checkbox" className="scale-150" />
            <p className="">Sometimes Else</p>
          </div>

          <div className="name-wrapper flex flex-col gap-5  mt-5">
            <label className="text-xl font-semibold" for="name">
              Please, share anything that will help prepare for our meeting.{" "}
              <span>*</span>
            </label>
            <textarea
              id="message"
              className=" mobile:w-full tablet:w-full laptop:w-1/2 rounded-md outline outline-2 outline-black-700 p-3 w-2/3 focus:outline focus:outline-sky-500 focus:outline-2"
              name="message"
              rows="3"
              cols="40"
            ></textarea>
          </div>
          <div className=" flex flex-col gap-5 mt-5">
            <label className="text-xl font-semibold" for="name">
              Please, share with us the name of your Fibery workspace (if any){" "}
              <span>*</span>
            </label>
            <input
              className=" mobile:w-full tablet:w-full laptop:w-1/2 outline-2 outline outline-black-300 rounded-md p-3 w-1/2  focus:outline focus:outline-2 focus:outline-sky-500"
              type="text"
              required
            />
          </div>

          <p className="mt-5">
            By proceeding, you confirm that you have read and agree to
            <span className="">
              <a className=" text-blue-700 underline-offset-4" href="">
                {" "}
                Calendly's Terms of Use
              </a>
            </span>{" "}
            and
            <span>
              <a href="" className=" text-blue-700 underline-offset-4">
                {" "}
                Privacy Notice.
              </a>
            </span>
          </p>
          {/* footer button for schedule the event */}
          <button className="footer-btn text-white p-2 rounded-2xl bg-sky-600 w-60 hover:bg-blue-800 hover:cursor-pointer ">
            Schedule Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScheduleInfo;
