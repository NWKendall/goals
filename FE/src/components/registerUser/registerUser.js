import React from "react";
import axios from "axios";
import "./registerUser.styles.css";
import { emailRegEx, passwordRegEx } from "../../utils/regex";
import { useForm } from "react-hook-form";
import { NavLink, useHistory } from "react-router-dom";

const RegisterUser = () => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();

  const onSubmit = async (payload) => {
    await axios.post("http://localhost:4444/api/auth/register", payload)
    .then((res) => {
      // not a viable alternative as id only provided on register, needs to be on login and saved to state
      localStorage.setItem("id", res.data.id)
      history.push('/login')
    })
    .catch(err => console.log(err));
  };

  return (
    <div>
      <h2 style={{ color: "white" }}>Register</h2>
      <NavLink exact to="/login">
        Already have an account? Login here
      </NavLink>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="first_name"
          ref={register({ required: true, minLength: 1 })}
          placeholder="First Name"
        />
        {errors.first_name && (
          <span style={{ color: "red" }}>
            First name must be at least 1 character.
          </span>
        )}

        <input
          name="last_name"
          ref={register({ required: true, minLength: 1 })}
          placeholder="Last Name"
        />
        {errors.last_name && (
          <span style={{ color: "red" }}>
            Last name must be at least 1 character.
          </span>
        )}

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

export default RegisterUser;
