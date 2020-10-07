import React, { useContext } from 'react'
import { useForm } from "react-hook-form";

import ChoresContext from '../../../contexts/Chores/ChoresContext';
import './choresList.styles.css';

const ChoresList = () => {

  const { chores } = useContext(ChoresContext);
  const { register, handleSubmit } = useForm();

  return (
    <div className="mainStyle">
      <h2>Chores</h2>
    </div>
  )
}

export default ChoresList;
