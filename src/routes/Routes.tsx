import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Post, ViewPost, Create } from 'Pages';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/viewPost/:id' exact>
          <ViewPost />
        </Route>
        <Route path='/createPost' exact>
          <Create />
        </Route>
        <Route path='/' exact>
          <Post />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
