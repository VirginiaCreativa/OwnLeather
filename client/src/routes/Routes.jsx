import React, { Suspense, lazy } from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import User from '../containers/User';
import Login from '../containers/Login';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user">
          <User />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
