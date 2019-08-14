import React, { Component } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.js";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1> Hello</h1>
  </div>
);
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/hats" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
