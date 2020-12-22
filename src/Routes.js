import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BooksList from './pages/BooksList';
import Home from './pages/Home';
import ListUsers from './pages/ListUsers';
import Login from './pages/Login';
import Signup from './pages/Signup';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/users">
          <ListUsers />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/books">
          <BooksList />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
