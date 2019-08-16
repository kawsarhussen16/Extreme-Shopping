import React, { Component } from "react";

import Homepage from "./pages/homepage/homepage.js";
import ShopPage from "./pages/page/shop.js";
import Header from "./components/header/header.js";
import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
