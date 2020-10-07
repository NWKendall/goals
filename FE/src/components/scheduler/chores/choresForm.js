import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import ChoresContext from "../../../contexts/Chores/ChoresContext";

const ChoresForm = () => {
  const { addChore } = useContext(ChoresContext);
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => {
    addChore(data.newChore);
  };
  return (
    // all, active, completed, archived
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="newChore"
          type="text"
          placeholder="add a chore?"
          ref={register}
        />
        <button type="submit">+</button>
      </form>
  )
};

export default ChoresForm;
