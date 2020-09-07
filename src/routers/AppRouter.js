import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from '../ui/NavBar';
import JoinToClub from '../ui/JoinToClub';
import Footer from '../ui/Footer';

import Vacations from '../routes/Vacations';
import VacationPreview from '../routes/VacationPreview';

export default function AppRouter() {

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path={`/vacation`} component={Vacations} />
        <Route exact path={`/vacation/:vacationId`} component={VacationPreview} />
        <Route path={`/`} component={Vacations} />
      </Switch>
      <JoinToClub />
      <Footer />
    </>
  );
}
