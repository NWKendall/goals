import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from "./components/header/header.js";
import AppPage from "./components/appPage/appPage.js";
import Navbar from "./components/navbar/navbar";


function App() {
  return (
    <div className="appContainer">
      <Router>
        <Header />
        <Navbar />
        <AppPage />
      </Router>
    </div>
  );
}

export default App;
