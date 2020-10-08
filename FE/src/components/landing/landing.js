import React from "react";
import { NavLink } from "react-router-dom";
import "./landing.styles.css";

const Landing = () => {
  return (
    <div className="landingContaniner">
      <h1 className="landingH1">Goal Tracker & Accountability Manager</h1>
      <NavLink className="landingItem" exact to="/register">
        Register here
      </NavLink>
      <NavLink className="landingItem" exact to="/login">
        Login here
      </NavLink>
    </div>
  );
};

export default Landing;
