import React, { useContext } from "react";
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
import DailyContext from "../../contexts/Daily/DailyContext.js";

function Home() {

  const context = useContext(DailyContext)
  console.log(context)
  // call BE API with user data to make a new date entry
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
