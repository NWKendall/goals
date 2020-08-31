import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      <ul >
        <li className="navItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navItem">
          <Link to="/rules">Rules</Link>
        </li>
        <li className="navItem">
          <Link to="/mantra">Mantra</Link>
        </li>
        <li className="navItem">
          <Link to="/sto">STOs</Link>
        </li>
        <li className="navItem">
          <Link to="lto">LTOs</Link>
        </li>
        <li className="navItem">
          <Link to="schedule">Schedule</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
