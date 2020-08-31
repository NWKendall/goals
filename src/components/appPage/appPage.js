import React from "react";
import '../App.css';
import Header from "../header/header.js";
import Navbar from "../navbar/navbar.jsx";
import Mantra from "../mantra/mantra.jsx";
import Rules from "../rules/rules.jsx"
import Testcomp from "../test.js";


function AppPage() {
  return (
      <div className="">
        <Header />
        <Navbar className="navBarContainer"/>
      </div>
  );
}

export default AppPage;
