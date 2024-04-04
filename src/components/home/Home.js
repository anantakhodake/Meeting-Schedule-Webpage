import React from "react";
import "./Home.css";
import Navbar from "../navbar/Navbar";
import DatePicker from "../DatePicker";
import FirstForm from "../FirstForm";
import SecondForm from "../SecondForm";
import ScheduleInfo from "../ScheduleInfo";
import Scheduled from "../Scheduled";

function Home() {
  return (
    <div>
      <Scheduled />
      {/* <ScheduleInfo /> */}
      {/* <SecondForm /> */}
      {/* <FirstForm /> */}
    </div>
  );
}

export default Home;
