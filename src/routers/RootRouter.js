import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import AppRouter from './AppRouter';

export default function RootRouter() {

  return (
    <HashRouter>
      <Switch>
        <Route path='/' component={AppRouter} />
      </Switch>
    </HashRouter>
  );
}
