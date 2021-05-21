import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './screens/Landing';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route component={Landing} path="/" exact/>
      </Switch>
    </BrowserRouter>
  );
}