import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { VacationProvider } from '../context/VacationContext';
import { CoinProvider } from '../context/CoinContext';

import AppRouter from './AppRouter';

export default function RootRouter() {

  return (
    <CoinProvider>
      <VacationProvider>
        <HashRouter>
          <Switch>
            <Route path='/' component={AppRouter} />
          </Switch>
        </HashRouter>
      </VacationProvider>
    </CoinProvider>
  );
}
