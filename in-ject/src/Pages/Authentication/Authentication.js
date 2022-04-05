import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../../Components/LogIn/Login";
import SignUp from "../../Components/SignUp/SignUp";

function Authentication() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/register" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Authentication;
