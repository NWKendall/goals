import React from "react";
import { Route, Switch } from "react-router-dom";
import "./contentPage.styles.css";
import {
  Mantra,
  Rules,
  LTObjectives,
  STObjectives,
  Schedule,
  Dashboard,
} from "../";

function ContentPage() {
  return (
    <div className="contentContainer">
      <Switch>
        <Route path="/goals/dashboard" component={Dashboard} />
        <Route path="/goals/mantra" component={Mantra} />
        <Route path="/goals/rules" component={Rules} />
        <Route path="/goals/sto" component={STObjectives} />
        <Route path="/goals/lto" component={LTObjectives} />
        <Route path="/goals/schedule" component={Schedule} />
      </Switch>
    </div>
  );
}

export default ContentPage;
