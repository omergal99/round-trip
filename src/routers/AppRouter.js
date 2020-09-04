import React from 'react';
import { Switch, Route } from 'react-router-dom';

import VacationList from '../routes/VacationList';
import VacationPreview from '../routes/VacationPreview';


export default function AppRouter() {

  return (
    <Switch>
      <Route exact path={`/vacation`} component={VacationList} />
      <Route exact path={`/vacation/:vacationId`} component={VacationPreview} />
      <Route path={`/`} component={VacationList} />
    </Switch>
  );
}
