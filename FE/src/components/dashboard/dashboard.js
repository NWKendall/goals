import React, { useContext } from "react";
import DailyContext from "../../contexts/Daily/DailyContext.js";

import { scoreHistory } from "../data.js";
import DayScoreCard from "./dayScoreCard.js";
import "./dashboard.styles.css";

const Dashboard = () => {
  const context = useContext(DailyContext);
  console.log({ context })
  let percent = (context.score / context.daily.length) * 100;

  return (
    <div>
      Dashboard
      <p>
        Today's Score!{" "}
        {percent % 2 !== 0 ? percent.toFixed(1) : percent.toFixed(0)}%
      </p>
      <p>{context.today}</p>
      <div className="cardDisplay">
        {Object.values(scoreHistory).map((score, i) => (
          <DayScoreCard data={score} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
