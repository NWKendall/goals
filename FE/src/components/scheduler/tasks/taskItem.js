import React from "react";

const TaskItem = ({ box, register, handleCheckBoxes }) => {
  const { name, checked, id } = box;
  return (
    <li key={name} className="liStyle">
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
