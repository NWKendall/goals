import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './loginRegisterUser.styles.css';

const LoginRegisterUser = () => {
  const [ login, setLogin ] = useState(true)
  const { register, handleSubmit, errors } = useForm(); 

 return (

    <div>
      <h2>Login</h2>
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
      </form>
      
    {/* </div>
      
    <div>
      <h2>Register</h2>
      <form>
        <input
          name="email" 
          ref={register({ required: true })}
          placeholder="Email"
        /> 
        <input
          name="email" 
          ref={register({ required: true })}
          placeholder="Email"
        /> 
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
      </form> */}
      
    </div>
 )
 
  
}

export default LoginRegisterUser
