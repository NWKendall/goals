import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import ChoresContext from "../../../contexts/Chores/ChoresContext";
import "./choresList.styles.css";

const ChoresForm = () => {
  const { addChore } = useContext(ChoresContext);
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data.newChore)
    addChore(data.newChore);
    reset(data.newChore)
  };
  return (
    <form
      className="choresFormStyle"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <input
        className="choreInput"
        name="newChore"
        type="text"
        placeholder={
          errors.newChore ? "Can't add an empty field!" : "add a chore?"
        }
        ref={register({ required: true, minLength: 1 })}
      />
      <button className="submitChoreButton" type="submit">+</button>
    </form>
  );
};

export default ChoresForm;
