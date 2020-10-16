import React from "react";
  import { useForm } from "react-hook-form";
import { NavLink, useHistory } from "react-router-dom";
import { emailRegEx, passwordRegEx } from "../../utils/regex";
import "./loginUser.styles.css";
import axiosWithAuth from "../../utils/axiosWithAuth";


const LoginUser = () => {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();


  const onSubmit = async (payload) => {
    axiosWithAuth()
      .post("http://localhost:4444/api/auth/login", payload)
      .then(async (res) => {
        localStorage.setItem("token", await res.data.token);
        // const { first_name, last_name, email } = await res.data.user;
        localStorage.setItem("user", JSON.stringify(await res.data.user))
        history.push("/goals");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="loginContaniner">
      <h2 className="loginHeader">Login</h2>
      <NavLink className="loginItem" exact to="/register">
        Need an account? Register here
      </NavLink>
      <NavLink className="loginItem" exact to="/">
        Home{" "}
      </NavLink>

      <form className="loginFormStyle" onSubmit={handleSubmit(onSubmit)}>
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
        <button className="submitLoginButton" type="submit" onSubmit={handleSubmit(onSubmit)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginUser;
