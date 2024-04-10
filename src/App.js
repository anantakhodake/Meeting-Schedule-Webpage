import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import FirstForm from "./components/FirstForm";
import SecondForm from "./components/SecondForm";
import ScheduleInfo from "./components/ScheduleInfo";
import ShowTime from "./components/ShowTime";
import Scheduled from "./components/Scheduled";
import ScheduleCard from "./components/ScheduleCard";
import { useState } from "react";

function App() {
  const [stage, setStage] = useState("choose-date");
  const [time, setTime] = useState({
    time: "",
    date: "",
  });
  console.log("time", time);
  return (
    <div>
      {stage === "choose-date" ? (
         <FirstForm setStage={setStage} time={time} setTime={setTime} />
      ) : stage === "personal-details" ? (
        <SecondForm setStage={setStage} time={time} setTime={setTime} />
      ) : stage === "schedule" ? (
        <Scheduled setStage={setStage} time={time} setTime={setTime} />
      ) : (
        <h1>ended</h1>
      )}
     
    </div>
  );
}

export default App;
