import "./App.css";
import FirstForm from "./components/FirstForm";
import SecondForm from "./components/SecondForm";
import Scheduled from "./components/Scheduled";
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
