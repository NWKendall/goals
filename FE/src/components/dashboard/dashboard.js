import React, { useContext, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth.js";
import DailyContext from "../../contexts/Daily/DailyContext.js";
import useLocalStorage from "../../hooks/useLocalStorage";
import { scoreHistory } from "../data.js";
import DayScoreCard from "./dayScoreCard.js";
import "./dashboard.styles.css";

const Dashboard = () => {
  const context = useContext(DailyContext);
  let percent = (context.score / context.daily.length) * 100;
  const date = { date: JSON.parse(localStorage.getItem("StoredState")).date };
  let dateObj;

  useEffect(async () => {
    // check DB for record with today's date
    // if exists ignore (timer)
    // otherwise post request
    let haveToday;
    await axiosWithAuth()
      .post("/goals/dates/today", date)
      .then((res) => {
        console.log(res)
        haveToday = res.data;
        console.log(0, haveToday)
      })
      .catch((err) => console.log(err));

    if (!haveToday) {
      await axiosWithAuth()
        .post("/goals/dates", date)
        .then((res) => {
          dateObj = {
            date_id: res.data.id,
            date: res.data.date,
            user_id: res.data.user_id,
          };
          console.log({dateObj})
          localStorage.setItem("date", JSON.stringify(dateObj))
        })
        .catch((err) => console.log(err));
    }
  }, []);

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
