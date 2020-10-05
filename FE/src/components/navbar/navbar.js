import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.styles.css";

const Navbar = () => {
  
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <ul className="navBar">
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          exact
          to="/goals/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          exact
          to="/goals/rules"
        >
          Rules
        </NavLink>
      </li>
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          exact
          to="/goals/mantra"
        >
          Mantra
        </NavLink>
      </li>
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          exact
          to="/goals/sto"
        >
          STOs
        </NavLink>
      </li>
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          exact
          to="/goals/lto"
        >
          LTOs
        </NavLink>
      </li>
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          exact
          to="/goals/schedule"
        >
          Schedule
        </NavLink>
      </li>

      <li className="NavLi" onClick={logout}>
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          exact
          to="/login">
          Logout
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
