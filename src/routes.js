import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Home, ProductSearch, DetailProduct } from 'views';

const Routes = () => (
  <Router>
    <Redirect from="/" to="/" />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/items" component={ProductSearch} />
      <Route exact path="/items/:id" component={DetailProduct} />
    </Switch>
  </Router>
);

export default Routes;
