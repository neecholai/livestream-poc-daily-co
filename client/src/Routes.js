import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import EventDetail from './EventDetail';
import CreatorDetailPage from './CreatorDetailPage';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/events/:id">
        <EventDetail />
      </Route>
      <Route exact path="/creator/:id">
        <CreatorDetailPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
