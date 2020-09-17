import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import "./countdown.styles.css";

const CountDown = () => {
  const [input, setInput] = useState(0);
  const [form, showForm] = useState(false);

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

      if (timer.seconds === 0 && timer.minutes) {
        setTimer({
          ...timer,
          seconds: 60,
          minutes: timer.minutes - 1,
        });
      }

      if (timer.seconds === 0 && timer.minutes && timer.hours) {
        setTimer({
          ...timer,
          seconds: 60,
          minutes: 59,
          hours: timer.hours - 1,
        });
      }
      if (timer.seconds === 0 && timer.minutes === 0 && timer.hours === 0) {
        reset()
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
    showForm(false)
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
      <button onClick={() => showForm(!form)}>Time?</button>
        {form ? (
      <div>
          <form className="cdFormStyle" onSubmit={handleSubmit(onSubmit)}>
            <label className="cdLabelStyle">
              hrs
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
              min
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
              sec
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
            <button type="submit" className="cdSubmitStyle">
              Submit
            </button>
          </form>
      </div>
        ) : null}
      </div>
  );
};

export default CountDown;
