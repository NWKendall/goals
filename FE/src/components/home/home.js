import React from "react";
import "../../App.css";
import DailyState from "../../contexts/Daily/DailyState.js";
import Header from "../header/header.js";
import ContentPage from "../contentPage/contentPage.js";
import Navbar from "../navbar/navbar";
import Timer from "../timer/timer";
import CountDown from "../countdown/countdown.js";
import FitnessStats from "../fitnessStats/fitnessStats.js";

function Home() {
  return (
    <DailyState>
      <div className="appContainer">
        <Header />
        <Navbar />
        <Timer />
        <CountDown />
        <FitnessStats />
        <ContentPage />
      </div>
    </DailyState>
  );
}

export default Home;
