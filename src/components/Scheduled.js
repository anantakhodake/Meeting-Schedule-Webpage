import React from "react";
import "./Scheduled.css";
import logo from "./img/logo.jpg";
import succesful from "./img/succesful.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ScheduleCard from "./ScheduleCard";
import google from "./img/google.webp";
import Microsoft from "./img/Microsoft.png";

function Scheduled() {
  return (
    <div className="flex justify-center mt-11 ">
      <div className=" flex p-3 flex-col gap-8 w-2/3  shadow-[0_5px_15px_0_rgba(0,0,0,0.15)]">
        <div className=" flex items-center flex-col gap-3">
          <img className="rounded-full h-20 w-20" src={logo} alt="" />

          <div className="flex gap-2 items-center">
            <img className="h-7" src={succesful} alt="" />
            <h1 className=" text-xl font-bold">You are Scheduled</h1>
          </div>
          <p className="p-container mt-2 mobile:text-center ">
            A calendar invitation has been sent to your email address.
          </p>
          <button className=" mobile:w-full tablet:w-60 laptop:w-60 p-2 text-slate-600 w-52 rounded-3xl border border-solid border-slate-700 hover:bg-sky-100">
            Open Invitation <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
        <ScheduleCard />
        <div className="flex justify-center  tablet:justify-center mobile:justify-center mobile:w-full ">
          <div className="w-4/3 flex gap-2.5  flex-col items-start p-3 pl-12 ">
            <h1 className="font-semibold text-base">
              Schedule your own meetings with Calendly for free
            </h1>
            <p className="text-slate-500 text-base font-sans">
              Eliminate the back-and-forth emails for finding time.
            </p>
            <div className=" flex gap-3 mobile:flex-col tablet:flex tablet:flex-row">
              <button className="flex justify-center items-center rounded-3xl gap-1 w-64 border border-solid border-slate-950 p-3 mobile:w-full tablet:w-64  hover:bg-sky-100 hover:cursor-pointer">
                <img className="h-6" src={google} alt="" />
                Sign up With Google
              </button>

              <button className="flex justify-center items-center rounded-3xl gap-1 w-64 border border-solid border-slate-950 p-3 tablet:w-64  mobile:w-full hover:bg-sky-100 hover:cursor-pointer">
                <img className="h-6" src={Microsoft} alt="" />
                Sign up With Microsoft
              </button>
            </div>
            <div className="flex justify-center mobile:pl-6 mobile:justfy-center tablet:pl-36 ">
              <a className="text-blue-500 text-sm    " href="">
                Sign Up With Work Email
              </a>
            </div>
          </div>
        </div>
      </div>
      \
    </div>
  );
}

export default Scheduled;
