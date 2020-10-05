import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import './loginUser.styles.css';

const LoginUser = () => {
  const [ credentials, setCredentials ] = useState({
    email: "",
    password: "",
  })
  const { register, handleSubmit, errors } = useForm(); 

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }
 return (
    <div>
      <h2 style={{ color: "white" }}>Login</h2>
      <NavLink exact to="/register">Need an account? Register here</NavLink>

      <form onSubmit={handleSubmit()}>
        <input
          name="email" 
          ref={register({ required: true })}
          placeholder="Email"
        /> 

        <input
          name="password" 
          type="password"
          ref={register({ required: true })}
          placeholder="Password"
        /> 
        <button type="submit">Submit</button>

      </form>

    </div>
 )
 
  
}

export default LoginUser
