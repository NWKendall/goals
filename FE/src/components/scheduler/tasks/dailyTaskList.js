import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import DailyContext from "../../../contexts/Daily/DailyContext.js";
import "./dailyTasks.styles.css";
import { scoreHistory } from "../../data.js";
import TaskItem from "./taskItem.js";

const DailyTaskList = () => {
  const { register, handleSubmit } = useForm();
  const { daily, score, scoreIncrease, scoreDecrease } = useContext(
    DailyContext
  );

  let percent = (score / daily.length) * 100;

  // add api call to BE
  function onSubmit(daily) {
    let date = moment().format("L");
    let todayScore = { daily, score, date };
    scoreHistory.push(todayScore);
  }

  const handleCheckBoxes = (e) => {
    if (e.target.checked) scoreIncrease(e.target.name);
    else scoreDecrease(e.target.name);    
  };

  return (
      <form className="formStyle" onSubmit={handleSubmit(onSubmit)}>
        <ul className="ulStyle">
          {daily.map((box, i) => (
            <TaskItem
              key={i}
              box={box}
              register={register}
              handleCheckBoxes={handleCheckBoxes}
            />
          ))}
        </ul>
        <h2>
          Today's Score:{" "}
          {percent % 2 !== 0 ? percent.toFixed(1) : percent.toFixed(0)}%
        </h2>
        <input type="submit" />
      </form>
  );
};

export default DailyTaskList;
