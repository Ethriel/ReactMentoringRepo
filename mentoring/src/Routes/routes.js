import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "./routes-components";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={() => "Home sweet home"}></Route>
      {routes.map(r => (
        <Route key={r.path} exact {...r} />
      ))}
    </Switch>
  );
};

export default Routes;
