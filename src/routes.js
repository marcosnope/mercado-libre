import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, ProductSearch, DetailProduct } from 'views';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/items" component={ProductSearch} />
      <Route exact path="/items/:id" component={DetailProduct} />
      <Route component={Home} />
    </Switch>
  </Router>
);

export default Routes;
