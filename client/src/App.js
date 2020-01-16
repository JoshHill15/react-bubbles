import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";
import BubblesPage from "./components/BubblePage"

function App() {
  return (
    <Router>
      <div className="App">
        <NavLink to = "/">Login</NavLink>
        <NavLink to = "/bubbles-page">Bubbles</NavLink>
        <Switch>
          <PrivateRoute path = "/bubbles-page" component = {BubblesPage} />
          <Route exact path="/" component={Login} />
        </Switch>

        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
