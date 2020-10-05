import React, { useState, useEffect, memo } from "react";
import { useForm } from "react-hook-form";
import alarm from "./alarm.mp3";
import "./countdown.styles.css";

const CountDown = memo(() => {
  const [input, setInput] = useState(0);
  const [timeForm, setTimeForm] = useState(false);

  const playAudio = new Audio(alarm);

  const [timer, setTimer] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const [isActive, setIsActive] = useState(false);
  const { register, handleSubmit } = useForm();

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
    let interval = timer.seconds - 1;
    if (isActive) {
      interval = setInterval(() => {
        setTimer({
          ...timer,
          seconds: timer.seconds - 1,
        });
      }, 1000);

      if (timer.seconds === 0 && timer.minutes > 0) {
        setTimer({
          ...timer,
          seconds: 60,
          minutes: timer.minutes - 1,
        });
      }

      if (timer.seconds === 0 && timer.minutes > 0 && timer.hours > 0) {
        setTimer({
          ...timer,
          seconds: 60,
          minutes: 59,
          hours: timer.hours - 1,
        });
      }

      if (timer.seconds === 0 && timer.minutes === 0 && timer.hours === 0) {
        setIsActive(false);
        playAudio.play();
      }
    } else if (isActive && timer.seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timer]);

  const onSubmit = (data) => {
    setTimer({
      ...timer,
      seconds: Number(data.secsInput) || 0,
      minutes: Number(data.minsInput) || 0,
      hours: Number(data.hoursInput) || 0,
    });
    setTimeForm(false);
  };

  let hrs = ("0" + timer.hours).slice(-2),
    mins = ("0" + timer.minutes).slice(-2),
    secs = ("0" + timer.seconds).slice(-2);

  return (
    <div className="countDownContainer">
      <h4 className="cdtitle">CountDown⏱</h4>
      <p className="cdDisplay">
        {hrs} : {mins} : {secs}
      </p>
      <div className="buttonDiv">
        {!isActive ? (
          <button className="cdbtnStyle" onClick={() => toggle()}>
            Start
          </button>
        ) : isActive && timer.seconds !== 0 ? (
          <button className="cdbtnStyle" onClick={() => toggle()}>
            Stop
          </button>
        ) : null}

        <button className="cdbtnStyle" onClick={() => reset()}>
          Reset
        </button>
      </div>
      <button className="cdbtnStyle" onClick={() => setTimeForm(!timeForm)}>
        Time?
      </button>
      <div>
        {timeForm ? (
          <form className="cdFormStyle" onSubmit={handleSubmit(onSubmit)}>
            <label className="cdLabelStyle">
              h
              <input
                type="number"
                className="inputStyle"
                name="hoursInput"
                ref={register}
                onChange={(e) => setInput(e)}
                min="0"
                max="24"
              />
            </label>
            <label className="cdLabelStyle">
              m
              <input
                type="number"
                className="inputStyle"
                name="minsInput"
                ref={register}
                onChange={(e) => setInput(e)}
                min="0"
                max="59"
              />
            </label>
            <label className="cdLabelStyle">
              s
              <input
                type="number"
                className="inputStyle"
                name="secsInput"
                ref={register}
                onChange={(e) => setInput(e)}
                min="0"
                max="60"
              />
            </label>
            <button
              type="submit"
              style={{ backgroundColor: "#106ba3" }}
              className="cdbtnStyle"
            >
              Submit
            </button>
          </form>
        ) : null}
      </div>
    </div>
  );
});

export default CountDown;
