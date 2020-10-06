import React from "react";
import "../../App.css";
import DailyState from "../../contexts/Daily/DailyState.js";
import {
  Header,
  Navbar,
  Timer,
  CountDown,
  FitnessStats,
  ContentPage,
} from "../";

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
