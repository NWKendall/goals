import React, { useState, useContext } from "react";

import ChoresContext from "../../../contexts/Chores/ChoresContext";
import ChoreItem from "./choreItem";
import ChoresForm from "./choresForm";
import "./choresList.styles.css";

const ChoresList = () => {
  const { chores, archived, completeChore, unCompleteChore } = useContext(ChoresContext);

  const [display, setDisplay] = useState("active");

  const handleCheckBoxes = (e, id) =>
    e.target.checked ? completeChore(id) : unCompleteChore(id);

  return (
    <div className="choresStyle">
      <h2 className="choresH2">Chores</h2>
      <ChoresForm />
      <button onClick={() => setDisplay("active")}>Active</button>
      <button onClick={() => setDisplay("completed")}>Completed</button>
      <button onClick={() => setDisplay("Archived")}>Archived</button>
      {!chores.length ? (
        <p>You have nothing else to do...?</p>
      ) : chores.length && display === "active" ? (
        <ul className="choresUlStyle">
          {chores.map((chore, i) => (
            <ChoreItem
              chore={chore}
              key={i}
              handleCheckBoxes={handleCheckBoxes}
            />
          ))}
        </ul>
      ) : chores.length && display === "archived" ? (
        <ul className="choresUlStyle">
          {archived.map((archive, i) => (
            <ChoreItem
              archive={archive}
              key={i}
              handleCheckBoxes={handleCheckBoxes}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default ChoresList;
