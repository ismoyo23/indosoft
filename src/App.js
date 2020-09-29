import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./page/Detail";
import Home from "./page/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Detail/:id" component={Detail} />

        {/* Route User */}
      </Switch>
    </Router>
  );
}

export default App;
