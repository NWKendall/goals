import React, { useState, useContext } from "react";

import ChoresContext from "../../../contexts/Chores/ChoresContext";
import ChoreItem from "./choreItem";
import ChoresForm from "./choresForm";
import "./choresList.styles.css";

const ChoresList = () => {
  const {
    chores,
    archive,
    completeChore,
    unCompleteChore,
    archiveChore,
    unArchiveChore,
    deleteArchived,
  } = useContext(ChoresContext);

  const [display, setDisplay] = useState("all");

  const handleCheckBoxes = (e, id) =>
    e.target.checked ? completeChore(id) : unCompleteChore(id);

  return (
    <div className="choresStyle">
      <h2 className="choresH2">Chores</h2>
      <div>
      <ChoresForm />
        <button onClick={() => setDisplay("all")}>All</button>
        <button onClick={() => setDisplay("completed")}>Completed</button>
        <button onClick={() => setDisplay("archived")}>Archived</button>
      </div>
      {!chores.length && display === "all" ? (
        <p>You have nothing else to do...?</p>
      ) : chores.length && display === "all" ? (
        <ul className="choresUlStyle">
          {chores.map((item, i) =>
            !item.archived ? (
              <ChoreItem
                item={item}
                key={i}
                display={display}
                handler={handleCheckBoxes}
              />
            ) : null
          )}
        </ul>
      ) : chores.length && display === "completed" ? (
        <ul className="choresUlStyle">
          {chores.map((item, i) =>
            item.checked && !item.archived ? (
              <ChoreItem
                item={item}
                key={i}
                display={display}
                handler={handleCheckBoxes}
                handler2={archiveChore}
              />
            ) : null
          )}
        </ul>
      ) : display === "archived" ? (
        <ul className="choresUlStyle">
          {archive.map((item, i) =>
            item.archived ? (
              <ChoreItem
                item={item}
                key={i}
                display={display}
                handler={unArchiveChore}
                handler2={deleteArchived}
              />
            ) : null
          )}
        </ul>
      ) : null}
    </div>
  );
};

export default ChoresList;
