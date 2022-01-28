import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/ShopPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
