import React from "react";

const ChoreItem = ({ chore, handleCheckBoxes }) => {
  const { name, checked, id } = chore;

  return (
    <li key={id} className="">
      <label>{name}</label>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => handleCheckBoxes(e, id)}
      ></input>
    </li>
  );
};

export default ChoreItem;
