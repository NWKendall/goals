import React from "react";

const Task = ({ box, i, register, handleCheckBoxes }) => {
  const { name, checked } = box;
  return (
    <li key={i} className="liStyle">
      <label>{name}</label>
      <input
        className="checkBoxStyle"
        type="checkbox"
        name={name}
        checked={checked}
        ref={register}
        onChange={(e) => handleCheckBoxes(e)}
      />
    </li>
  );
};

export default Task;
