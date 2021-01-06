import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/home';
import User from '../containers/user';

const router = () => {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user">
          <User />
        </Route>
      </Switch>
    </>
  );
}

export default router;
