import React from "react";

const ChoreItem = ({ chore, i }) => {
  const { name, completed, } = chore;
  return (
    <li key={i} className="">
      <label>{name}</label>
      <input
        type="checkbox"
        name={name}
        checked={completed}
      ></input>
    </li>
  );
};

export default ChoreItem;
