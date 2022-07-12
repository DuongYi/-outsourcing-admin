import React, { Suspense, lazy } from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import LoadingScreen from "src/components/LoadingScreen";

function Routes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route
          exact
          path="/login"
          component={lazy(() => import("src/pages/auth/Login"))}
        ></Route>
      </Switch>
    </Suspense>
  );
}

export default Routes;
