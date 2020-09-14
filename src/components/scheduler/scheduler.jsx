import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { scheduleData } from '../data.js';
import './scheduler.styles.css';

const Scheduler = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  let [state, setState] = useState({
    checkBoxes: scheduleData,
    score: 0,
  });

  const percent = (state.score / state.checkBoxes.length) * 100;

  // add api call to BE
  const onSubmit = (data) => alert(`Send todays score of ${percent}% somewhere!`);

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
    <div className="container">
        <form className="formStyle" onSubmit={handleSubmit(onSubmit)}>
            <ul className="ulStyle">
                {state.checkBoxes.map((box, i) => (
                <li key={i} className="liStyle">
                    <label>{box.name}</label>
                    <input
                        className="checkBoxStyle"
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
                {percent % 2 !== 0 ? percent.toFixed(1)
                : percent.toFixed(0)}{" "}
                %
            </h2>
            <input type="submit" />
        </form>
        <div>
            asdasd
        </div>
    </div>
  );
};

export default Scheduler;

// needs to reset every 24 hours
