import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.js";
import ContentPage from "./components/contentPage/contentPage.jsx";
import Navbar from "./components/navbar/navbar";
import DailyContext from "./contexts/Daily/DailyContext.js";

function App() {
  const useDailyContext = useContext(DailyContext);

  // useEffect(() => {
  //   useDailyContext.getActivities();
  // });

  return (
      <Router>
        <div className="appContainer">
          <Header />
          <Navbar />
          <ContentPage />
        </div>
      </Router>
  );
}

export default App;
