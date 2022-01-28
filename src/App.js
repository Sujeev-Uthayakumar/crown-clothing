import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/HomePage";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
