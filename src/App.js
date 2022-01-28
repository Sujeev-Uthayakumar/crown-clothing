import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
