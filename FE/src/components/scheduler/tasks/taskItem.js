import React from "react";

const TaskItem = ({ box, key, register, handleCheckBoxes }) => {
  const { name, checked } = box;
  return (
    <li key={key} className="liStyle">
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

export default TaskItem;
