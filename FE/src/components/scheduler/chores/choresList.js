import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import ChoresContext from "../../../contexts/Chores/ChoresContext";
import ChoreItem from "./choreItem";
import ChoresForm from "./choresForm";
import "./choresList.styles.css";

const ChoresList = () => {
  const { chores } = useContext(ChoresContext);

  return (
    // all, active, completed, archived
    <div className="mainStyle">
      <h2>Chores</h2>
      <ChoresForm />

      {!chores.length ? (
        <p>You have nothing else to do...?</p>
      ) : (
        <ul>
        {chores.map((chore, i) => (
          <ChoreItem chore={chore} i={i} />
        ))}
        </ul>
      )}
    </div>
  );
};

export default ChoresList;
