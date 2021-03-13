import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, DetailProduct } from 'pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={DetailProduct} />
    </Switch>
  </Router>
);

export default Routes;
