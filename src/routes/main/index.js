import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Giphy from "../../pages/gif-details";
import Home from "../../pages/home";
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/gif/:id" component={Giphy} />
  </Switch>
);

export default App;
