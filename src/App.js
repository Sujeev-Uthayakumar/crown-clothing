import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/header/Header";
import AuthPage from "./pages/authpage/AuthPage";
import { auth } from "./firebase/firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route exact={true} path="/shop" component={ShopPage} />
          <Route exact={true} path="/signin" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
