import React from "react";
import "./choresList.styles.css";

const ChoreItem = ({ display, item, handler }) => {
  const { name, checked, id } = item;

  return (
    <li key={id} className="liStyle">
      <label>{name}</label>
      {display === "all" ? (
        <input
          className="checkBoxStyle"
          type="checkbox"
          name={name}
          checked={checked}
          onChange={(e) => handler(e, id)}
        />
      ) : display === "completed" ? (
        <div>
          <span className="iconStyle" onClick={(e) => handler(e, id)}>
            ◀
          </span>
          <span className="iconStyle" onClick={(e) => handler(e, id)}>
            📚
          </span>
        </div>
      ) : display === "archived" ? (
        <div>
          <span className="iconStyle" onClick={(e) => handler(e, id)}>
            ◀
          </span>
          <span className="iconStyle" onClick={(e) => handler(e, id)}>
            🗑
          </span>
        </div>
      ) : null}
    </li>
  );
};

export default ChoreItem;
