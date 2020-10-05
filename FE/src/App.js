import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginRegisterUser from "./components/loginRegisterUser/loginRegisterUser.js";
import Home from "./components/home/home";

function App() {
  (function () {
    let lastclear = localStorage.getItem("lastclear"),
      time_now = new Date().getTime();

    if (time_now - lastclear > 1000 * 60 * 60 * 24) {
      localStorage.clear();

      localStorage.setItem("lastclear", time_now);
    }
  })();

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginRegisterUser} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
