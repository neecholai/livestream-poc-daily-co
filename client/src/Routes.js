import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import EventDetailPage from './Events/EventDetailPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/events/:id">
        <EventDetailPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
