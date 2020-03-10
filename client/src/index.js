import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { store, persistor } from './redux/store.js';


import { BrowserRouter as Router, } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
);
