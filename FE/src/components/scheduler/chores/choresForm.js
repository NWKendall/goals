import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import ChoresContext from "../../../contexts/Chores/ChoresContext";

const ChoresForm = () => {
  const { addChore } = useContext(ChoresContext);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    addChore(data.newChore);
  };
  return (
    // all, active, completed, archived
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="newChore"
        type="text"
        placeholder={errors.newChore ? "Can't add an empty field!" : "add a chore?"}
        ref={register({required: true, minLength: 1})}
      />
      <button type="submit">+</button>
      {/* {errors.newChore && (
        <span style={{ color: "red", marginLeft: "5%" }}></span>
      )} */}
    </form>
  );
};

export default ChoresForm;
