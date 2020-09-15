import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.js";
import ContentPage from "./components/contentPage/contentPage.jsx";
import Navbar from "./components/navbar/navbar";
import DailyState from "./contexts/Daily/DailyState";
function App() {



  return (
    <DailyState>
      <Router>
        <div className="appContainer">
          <Header />
          <Navbar />
          <ContentPage />
        </div>
      </Router>
    </DailyState>
  );
}

export default App;
