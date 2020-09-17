import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.js";
import ContentPage from "./components/contentPage/contentPage.jsx";
import Navbar from "./components/navbar/navbar";
import Timer from "./components/timer/timer";
import DailyState from "./contexts/Daily/DailyState";
import CountDown from "./components/countdown/countdown.js";

function App() {

  (function () {
    let lastclear = localStorage.getItem('lastclear'),
        time_now  = (new Date()).getTime();
  
    if ((time_now - lastclear) > 1000 * 60 * 60 * 24) {
  
      localStorage.clear();
  
      localStorage.setItem('lastclear', time_now);
    }
  
  })();


  return (
    <DailyState>
      <Router>
        <div className="appContainer">
          <Header />
          <Navbar />
          <Timer />
          <CountDown />
          <ContentPage />
        </div>
      </Router>
    </DailyState>
  );
}

export default App;
