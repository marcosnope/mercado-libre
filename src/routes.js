import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, ProductSearch, DetailProduct } from 'pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/items" component={ProductSearch} />
      <Route exact path="/items/:id" component={DetailProduct} />
    </Switch>
  </Router>
);

export default Routes;