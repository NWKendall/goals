import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { scheduleData } from '../data.js';

const Scheduler = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  let [state, setState] = useState({
    checkBoxes: scheduleData,
    score: 0,
  });

  const percent = (state.score / state.checkBoxes.length) * 100;
  const onSubmit = (data) => console.log(data, state.score);

  const handleCheckBoxes = (e) => {
    if (!!e.target.checked) {
      setState({
        ...state,
        score: state.score + 1,
      });
    } else {
      setState({
        ...state,
        score: state.score - 1,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul style={{ display: "flex", border: "1px pink solid" }}>
        {state.checkBoxes.map((box, i) => (
          <li key={i}>
            <label>{box.name}</label>
            <input
              type="checkbox"
              name={box.name}
              ref={register}
              onChange={(e) => handleCheckBoxes(e)}
            />
          </li>
        ))}
      </ul>
      <h2>
        Today's Score:{" "}
        {percent === 0 || percent === 100
          ? percent.toFixed(0)
          : percent.toFixed(1)}{" "}
        %
      </h2>
      <input type="submit" />
    </form>
  );
};

export default Scheduler;

// needs to reset every 24 hours
