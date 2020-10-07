import React from "react";


const ChoreItem = ({ chore, i, handleCheckBoxes }) => {
  const { name, checked, id } = chore;
  
  return (
    <li key={i} className="">
      <label>{name}</label>
      <input
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={e => handleCheckBoxes(e)}
      ></input>
    </li>
  );
};

export default ChoreItem;
