import React from "react";
import "../../App.css";
import DailyProvider from "../../contexts/Daily/DailyProvider.js";
import {
  Header,
  Navbar,
  Timer,
  CountDown,
  FitnessStats,
  ContentPage,
} from "../";
import ChoresProvider from "../../contexts/Chores/ChoresProvider";

function Home() {
  return (
    <DailyProvider>
      <ChoresProvider>
        <div className="appContainer">
          <Header />
          <Navbar />
          <Timer />
          <CountDown />
          <FitnessStats />
          <ContentPage />
        </div>
      </ChoresProvider>
    </DailyProvider>
  );
}

export default Home;
