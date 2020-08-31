import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/header/header.js";
import Navbar from "./components/navbar/navbar.jsx";
import Mantra from "./components/mantra/mantra.jsx";
import Rules from "./components/rules/rules.jsx"
import Testcomp from "./components/test.js";
import AppPage from "./components/appPage/appPage.js";


function App() {
  return (
    <Router>
      <AppPage />
      <Switch>
        <Route exact path="/" />
        <Route path="/mantra" component={Mantra} />
        <Route path="/rules" component={Rules} />
        <Route path="/sto" component={Testcomp} />
        <Route path="/lto" component={Testcomp} />
        <Route path="/schedule" component={Testcomp} />
      </Switch>
    </Router>
  );
}

export default App;
