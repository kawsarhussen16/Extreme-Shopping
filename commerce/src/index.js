import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { Provider } from 'react-redux';


const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);
