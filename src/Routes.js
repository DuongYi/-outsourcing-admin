import React, { Suspense, lazy } from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import LoadingScreen from "src/components/LoadingScreen";

import Overview from "src/pages/dashboard/overview";

const DashboardLayout = lazy(() =>
  import("src/components/dashboard/DashboardLayout")
);

function Routes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route
          exact
          path="/404"
          component={lazy(() => import("src/pages/view/Error404View"))}
        />

        <Route
          exact
          path="/login"
          component={lazy(() => import("src/pages/auth/Login"))}
        />

        <Route
          exact
          path="/*"
          render={() => (
            <Switch>
              <DashboardLayout>
                <Route exact path="/thong-ke" component={Overview} />
              </DashboardLayout>
            </Switch>
          )}
        />

        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
}

export default Routes;
