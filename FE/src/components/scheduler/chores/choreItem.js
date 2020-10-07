import React from "react";
import "./choresList.styles.css";

const ChoreItem = ({ chore, handleCheckBoxes }) => {
  const { name, checked, id } = chore;

  return (
    <li key={id} className="liStyle">
      <label>{name}</label>
      <input
        className="checkBoxStyle"
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => handleCheckBoxes(e, id)}
      />
    </li>
  );
};

export default ChoreItem;
