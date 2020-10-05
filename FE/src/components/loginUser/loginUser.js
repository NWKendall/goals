import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { emailRegEx, passwordRegEx } from "../../utils/regex";

import "./loginUser.styles.css";

const LoginUser = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data)
  }
  
  return (
    <div>
      <h2 style={{ color: "white" }}>Login</h2>
      <NavLink exact to="/register">
        Need an account? Register here
      </NavLink>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          ref={register({
            required: true,
            pattern: {
              value: emailRegEx,
              message: "Invalid email, please try again.",
            },
          })}
          placeholder="Email"
        />
        {errors.email && (
          <span style={{ color: "red" }}>Enter a proper email.</span>
        )}

        <input
          name="password"
          type="password"
          ref={register({
            required: true,
            pattern: {
              value: passwordRegEx,
              message:
                "Password must have at least 8 characters, including at least 1 capital letter, 1 digit, and 1 special character.",
            },
          })}
          placeholder="Password"
        />
        {errors.password && (
          <span style={{ color: "red" }}>Enter a proper password.</span>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginUser;
