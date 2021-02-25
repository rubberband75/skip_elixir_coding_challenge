"use strict";
import "../css/app.css";

import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Conversion from "./conversion";
import store from "./redux/store";

const root = document.getElementById("root");
ReactModal.setAppElement("#root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/">
          <Conversion />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  root
);
