import React, { useState, useEffect, useRef } from "react";
import "./timer.styles.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(58);
  const [isActive, setIsActive] = useState(false);

  let secs = seconds.toFixed(0).slice(-2)
  const minutes = useRef(0);
  const hours = useRef(0);
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
      if(seconds === 60) {
          minutes.current++
          setSeconds(0)
          if(minutes.current === 60) {
              minutes.current = 0
            hours.current++
      }
    }
    
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="stopwatch">
      <div style={{ color: "white", textAlign: "center" }}>Stopwatch</div>
      <p> {hours.current} : {minutes.current} : {secs}</p>
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
