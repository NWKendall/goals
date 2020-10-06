import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginUser from "./components/loginUser/loginUser.js";
import RegisterUser from "./components/registerUser/registerUser.js";
import PrivateRoute from './utils/privateRoute.js';
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

        <PrivateRoute path="/goals" component={Home} />

        <Route exact path="/login" component={LoginUser} />
        <Route exact path="/register" component={RegisterUser} />
        {/* <Route exact path="/" component={} /> */}

      </Switch>
    </Router>
  );
}

export default App;
