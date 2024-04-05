import React, { useState, useEffect } from "react";
import "./App.css";
import {connect} from 'react-redux';
import { startTimer, pauseTimer, resetTimer } from "./Actions/stopwatchActions";


const Stopwatch = ({startTimer, pauseTimer, resetTimer}) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(prevTime => prevTime + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  // useEffect(() => {
  //   return () => clearInterval(intervalId);
  // }, []);

  const toggleRunning = () => {
    setIsRunning(!isRunning);
    if(!isRunning) {
      startTimer();
    } else {
      pauseTimer();
    }
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
    resetTimer();
  };

  const formatTimeUnit = (unit) => {
    return unit.toString().padStart(2, "0");
  };

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {formatTimeUnit(hours)}:{formatTimeUnit(minutes)}:
        {formatTimeUnit(seconds)}:{formatTimeUnit(milliseconds)}
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={toggleRunning}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  startTimer: startTimer,
  pauseTimer: pauseTimer,
  resetTimer: resetTimer
};


export default connect(null, mapDispatchToProps)(Stopwatch);