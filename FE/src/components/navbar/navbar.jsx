import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <ul className="navBar">
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          exact to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          exact to="/rules"
        >
          Rules
        </NavLink>
      </li>
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          exact to="/mantra"
        >
          Mantra
        </NavLink>
      </li>
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          exact to="/sto"
        >
          STOs
        </NavLink>
      </li>
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          exact to="lto"
        >
          LTOs
        </NavLink>
      </li>
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          exact to="schedule"
        >
          Schedule
        </NavLink>
      </li>
      <li className=" navItem">Logout</li>
    </ul>
  );
};

export default Navbar;
