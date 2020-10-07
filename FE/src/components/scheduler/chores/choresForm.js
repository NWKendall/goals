import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import ChoresContext from "../../../contexts/Chores/ChoresContext";

const ChoresForm = () => {
  const { addChore } = useContext(ChoresContext);
  const { register, handleSubmit, setValue, errors } = useForm();
  const onSubmit = (data) => {
    addChore(data.newChore);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="newChore"
        type="text"
        placeholder={errors.newChore ? "Can't add an empty field!" : "add a chore?"}
        ref={register({required: true, minLength: 1})}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default ChoresForm;
