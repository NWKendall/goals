import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Scheduler = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  let [state, setState] = useState({
    checkBoxes: [
      {
        name: "awake",
        checked: false,
      },
      {
        name: "stretch",
        checked: false,
      },
      {
        name: "Mantra & Meditate",
        checked: false,
      },
      {
        name: "Study 1",
        checked: false,
      },
      {
        name: "30 mins Piano / Guitar",
        checked: false,
      },
      {
        name: "Study 2",
        checked: false,
      },
      {
        name: "Reading 30 mins",
        checked: false,
      },
    ],
    score: 0,
  });

  const percent = (state.score / state.checkBoxes.length) * 100;
  const onSubmit = (data) => console.log(data, state.score);

  const handleChanges = (e) => {
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

  //   useEffect(() => {}, [state]);
  console.log(state.score);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul style={{ display: "flex", border: "1px pink solid" }}>
        {state.checkBoxes.map((box) => (
          <li style={{ display: "flex", border: "1px green solid" }}>
            <label>{box.name}</label>
            <input
              type="checkbox"
              name={box.name}
              ref={register}
              onChange={(e) => handleChanges(e)}
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
