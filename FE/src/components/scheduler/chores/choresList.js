import React, { useState, useContext } from "react";

import ChoresContext from "../../../contexts/Chores/ChoresContext";
import ChoreItem from "./choreItem";
import ChoresForm from "./choresForm";
import "./choresList.styles.css";

const ChoresList = () => {
  const {
    chores,
    archive,
    editChore,
    completeChore,
    unCompleteChore,
    archiveChore,
    unArchiveChore,
    deleteArchived,
  } = useContext(ChoresContext);

  const [display, setDisplay] = useState("all");
  const [editID, setEdit] = useState(false);
  const [itemValue, setItemValue] = useState("");

  const handleCheckBoxes = (e, id) =>
    e.target.checked ? completeChore(id) : unCompleteChore(id);

  const handleEdit = (id, text) => {
    setEdit(id);
    setItemValue(text);
  };

  const submitEdit = (id, text) => {
    editChore(id, text)
    setEdit(false);
  }

  return (
    <div className="choresStyle">
      <h2 className="choresH2">Chores</h2>
      <div className="chorePanel">
        <ChoresForm />
        <div>
          <button onClick={() => setDisplay("all")}>All</button>
          <button onClick={() => setDisplay("completed")}>Completed</button>
          <button onClick={() => setDisplay("archived")}>Archived</button>
        </div>
      </div>
      {!chores.length && display === "all" ? (
        <p>You have nothing else to do...?</p>
      ) : chores.length && display === "all" ? (
        <ul className="choresUlStyle">
          {chores.map((item, i) =>
            !item.archived && editID === item.id ? (
              <li>
                <input
                  type="text"
                  value={itemValue}
                  onChange={(e) => setItemValue(e.target.value)}
                />
                <button onClick={() => submitEdit(item.id, itemValue)}>
                  Edit
                </button>
              </li>
            ) : (
              <ChoreItem
                item={item}
                key={i}
                display={display}
                handler={handleCheckBoxes}
                handleEdit={handleEdit}
              />
            )
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
