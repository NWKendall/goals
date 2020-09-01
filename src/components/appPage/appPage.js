import React from "react";
import { Route, Switch } from "react-router-dom";

import './appPage.styles.css';
import Mantra from "../mantra/mantra.jsx";
import Rules from "../rules/rules.jsx"
import Testcomp from "../test.js";


function AppPage() {
  return (
      <div className="contentContainer">
        <Switch>
          <Route exact path="/" />
          <Route path="/mantra" component={Mantra} />
          <Route path="/rules" component={Rules} />
          <Route path="/sto" component={Testcomp} />
          <Route path="/lto" component={Testcomp} />
          <Route path="/schedule" component={Testcomp} />
      </Switch>
      </div>
  );
}

export default AppPage;
