import React from "react";
import "./choresList.styles.css";

const ChoreItem = (props) => {
  const { name, checked, id } = props.item;

  return (
    <li key={id} className="liChoreStyle">
      <label>{name}</label>
      {props.display === "all" ? (
        <input
          className="checkBoxStyle"
          type="checkbox"
          name={name}
          checked={checked}
          onChange={(e) => props.handler(e, id)}
        />
      ) : props.display === "completed" ? (
        <div className="choreActionDiv">
          <span className="iconStyle" onClick={(e) => props.handler(e, id)}>
            ◀
          </span>
          <span className="iconStyle" onClick={() => props.handler2(id)}>
            📚
          </span>
        </div>
      ) : props.display === "archived" ? (
        <div className="choreActionDiv">
          <span className="iconStyle" onClick={() => props.handler(id)}>
            ◀
          </span>
          <span className="iconStyle" onClick={() => props.handler2(id)}>
            🚮
          </span>
        </div>
      ) : null}
    </li>
  );
};

export default ChoreItem;
