import React, { useState } from 'react';
import './registerUser.styles.css';
import {emailRegEx, passwordRegEx} from '../../utils/regex'
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';

const RegisterUser = () => {
  const { register, handleSubmit, errors } = useForm(); 

 return (      
    <div>
      <h2 style={{ color: "white" }}>Register</h2>
      <NavLink exact to="/login">Already have an account? Login here</NavLink>
      <form onSubmit={handleSubmit()}>
        <input
          name="first_name" 
          ref={register({ required: true, minLength: 1 })}
          placeholder="First Name"
        /> 
        <input
          name="last_name" 
          ref={register({ required: true, minLength: 1 })}
          placeholder="Last Name"
        /> 
        <input
          name="email" 
          ref={register({ required: true, pattern: emailRegEx })}
          placeholder="Email"
        /> 

        <input
          name="password" 
          type="password"
          ref={register({ required: true, pattern: passwordRegEx })}
          placeholder="Password"
        /> 
        <button type="submit">Submit</button>
      </form>

    </div>
 )
 
  
}

export default RegisterUser
