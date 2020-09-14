import React from "react";
import { Route, Switch } from "react-router-dom";

import './contentPage.styles.css';
import Mantra from "../mantra/mantra.jsx";
import Rules from "../rules/rules.jsx"
import LTObjectives from "../lto/lto";
import STObjectives from "../sto/sto";
import Scheduler from "../scheduler/scheduler";


function ContentPage() {
  return (
      <div className="contentContainer">
        <Switch>
          <Route exact path="/" />
          <Route path="/mantra" component={Mantra} />
          <Route path="/rules" component={Rules} />
          <Route path="/sto" component={STObjectives} />
          <Route path="/lto" component={LTObjectives} />
          <Route path="/schedule" component={Scheduler} />
      </Switch>
      </div>
  );
}

export default ContentPage;
