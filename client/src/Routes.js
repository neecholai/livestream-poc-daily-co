import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
