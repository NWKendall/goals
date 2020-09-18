import React, { useState, useEffect } from "react";
import "./timer.styles.css";

const Timer = () => {
  const [timer, setTimer] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setTimer({
      seconds: 0,
      minutes: 0,
      hours: 0,
    });
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer({
          ...timer,
          seconds: timer.seconds + 1,
        });
      }, 1000);

      if (timer.seconds === 60) {
        setTimer({
          ...timer,
          seconds: 0,
          minutes: timer.minutes + 1,
        });
      }

      if (timer.minutes === 60) {
        setTimer({
          ...timer,
          minutes: 0,
          hours: timer.hours + 1,
        });
      }

      if (timer.hours === 24) {
        reset();
      }
    } else if (!isActive && timer.seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timer]);

  let hrs = ("0" + timer.hours).slice(-2),
    mins = ("0" + timer.minutes).slice(-2),
    secs = ("0" + timer.seconds).slice(-2);

  return (
    <div className="stopwatchContainer">
        <h4 className="title">Stopwatch⏱</h4>
        <p className="timerDisplay">
          {hrs} : {mins} : {secs}
        </p>
        {!isActive && timer.seconds === 0 ? (
          <button className="btnStyle" onClick={() => toggle()}>
            Start
          </button>
        ) : isActive ? (
          <button className="btnStyle" onClick={() => toggle()}>
            Stop
          </button>
        ) : !isActive && timer.seconds > 0 ? (
          <button className="btnStyle" onClick={() => toggle()}>
            Resume
          </button>
        ) : null}

        <button className="btnStyle" onClick={() => reset()}>
          Reset
        </button>
      </div>
  );
};

export default Timer;

// {!timer.timerOn && timer.Time === 0 ? (
//     <button onClick={() =>startTimer()}>Start</button>
// ) : timer.timerOn && timer.Time !== 0 ? (
//     <button onClick={() =>startTimer()}>Resume</button>
// )
