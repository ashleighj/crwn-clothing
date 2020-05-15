import React from "react";
import { Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header/header.component";
import SignInUp from "./components/sign-in-up/sign-in-up.component";
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
