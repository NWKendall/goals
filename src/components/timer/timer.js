import React, { useState, useEffect } from "react";
import "./timer.styles.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="stopwatch">
      <div style={{ color: "white", textAlign: "center" }}>Stopwatch</div>
      <p>{seconds} </p>
      {!isActive && seconds === 0 ? (
        <button onClick={() => toggle()}>Start</button>
      ) : isActive && seconds > 0 ? (
        <button onClick={() => toggle()}>Stop</button>
      ) : !isActive && seconds > 0 ? (
        <button onClick={() => toggle()}>Resume</button>
      ) : null}

      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default Timer;

// {!timer.timerOn && timer.Time === 0 ? (
//     <button onClick={() =>startTimer()}>Start</button>
// ) : timer.timerOn && timer.Time !== 0 ? (
//     <button onClick={() =>startTimer()}>Resume</button>
// )
