import React from "react";
import { Route, Switch } from "react-router-dom";
import Form from "../pages/form";
import Home from "../pages/home";
import Keranjang from "../pages/keranjang";

function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/form">
          <Form />
        </Route>
        <Route path="/keranjang">
          <Keranjang />
        </Route>
      </Switch>
    </div>
  );
}

export default Router;
