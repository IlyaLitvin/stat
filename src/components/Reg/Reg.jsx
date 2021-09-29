import React from "react";
import Header from "./Header.jsx";
import Step1 from "./Step1.jsx";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Step2 from "./Step2.jsx";

const Step3 = () => {};

const Reg = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Step1} />
        <Route path="/reg2" component={Step2} />
        <Route path="/reg3" component={Step3} />
      </Switch>
    </BrowserRouter>
  );
};

export default Reg;
