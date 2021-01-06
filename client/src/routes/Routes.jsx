import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import User from '../containers/User';
import SignUp from '../containers/SignUp';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/user">
        <User />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
    </Switch>
  );
};

export default Routes;
