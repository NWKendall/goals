import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import DailyContext from "../../contexts/Daily/DailyContext.js";
import "./scheduler.styles.css";

const Scheduler = () => {
  const { register, handleSubmit } = useForm();
  const {daily, score, scoreIncrease, scoreDecrease} = useContext(DailyContext);

  let percent = (score / daily.length) * 100;

  // add api call to BE
  function onSubmit() {
    return alert(`Send todays score of ${percent}% somewhere!`);
  }

  const handleCheckBoxes = (e) => {
    if(e.target.checked) {
      scoreIncrease(e.target.name)
    } else {
      scoreDecrease(e.target.name)
    }
  }

  return (
    <div className="container">
      <form className="formStyle" onSubmit={handleSubmit(onSubmit)}>
        <ul className="ulStyle">
          {daily.map((box, i) => (
            <li key={i} className="liStyle">
              <label>{box.name}</label>
              <input
                className="checkBoxStyle"
                type="checkbox"
                name={box.name}
                checked={box.checked}
                ref={register}
                onChange={(e) => handleCheckBoxes(e)}
              />
            </li>
          ))}
        </ul>
        <h2>
          Today's Score:{" "}
          {percent % 2 !== 0 ? percent.toFixed(1) : percent.toFixed(0)}%
        </h2>
        <input type="submit" />
      </form>
      <div className="otherStyle">asdasd</div>
    </div>
  );
};

export default Scheduler;
