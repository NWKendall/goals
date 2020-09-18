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
          to="/"
          exact
        >
          Home
        </NavLink>
      </li>
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          to="/rules"
          exact
        >
          Rules
        </NavLink>
      </li>
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          to="/mantra"
          exact
        >
          Mantra
        </NavLink>
      </li>
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          to="/sto"
          exact
        >
          STOs
        </NavLink>
      </li>
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          to="lto"
          exact
        >
          LTOs
        </NavLink>
      </li>
      <li className="NavLi">
        <NavLink
          className="navItem"
          activeClassName="selectedLink"
          to="schedule"
          exact
        >
          Schedule
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
