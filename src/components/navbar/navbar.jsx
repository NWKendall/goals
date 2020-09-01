import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <div className="navBarContainer">
      <ul className="navBar">
        <li className="navItem">
          <NavLink activeClassName="selectedLink" to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink activeClassName="selectedLink" to="/rules" exact>
            Rules
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink activeClassName="selectedLink" to="/mantra" exact>
            Mantra
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink activeClassName="selectedLink" to="/sto" exact>
            STOs
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink activeClassName="selectedLink" to="lto" exact>
            LTOs
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink activeClassName="selectedLink" to="schedule" exact>
            Schedule
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
