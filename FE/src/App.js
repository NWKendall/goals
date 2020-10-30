import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { LoginUser, RegisterUser, Home } from "./components";
import Landing from "./components/landing/landing";
import PrivateRoute from "./utils/privateRoute.js";

function App() {
  (function () {
    let lastclear = localStorage.getItem("lastclear"),
      time_now = new Date().getTime();

    if (time_now - lastclear > 1000 * 60 * 60 * 24) {
      localStorage.removeItem("lastClear");

      localStorage.setItem("lastclear", time_now);
    }
  })();

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/goals" component={Home} />

        <Route exact path="/login" component={LoginUser} />
        <Route exact path="/register" component={RegisterUser} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
