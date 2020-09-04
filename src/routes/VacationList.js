import React from "react";
import vacationsJSON from '../services/data/vacations.json';

import GeneralProducts from '../ui/list/GeneralProducts';
import MaterialLoader from '../ui/loaders/MaterialLoader';

import VacationListItem from '../ui/subjects/vacation/VacationListItem';

export default React.memo(function VacationList() {
  console.log('VacationList');

  const [vacations, setVacations] = React.useState(null);

  React.useEffect(() => {
    (() => {
      setVacations(vacationsJSON.filter((item, idx) => idx < 5));
    })();
  }, [])

  console.log('vacations', vacations);

  if (vacations === null) return <MaterialLoader />;
  return (
    <div className="vacation-list">
      <GeneralProducts products={vacations} setProducts={setVacations}
        productsLength={vacationsJSON.length}>
        <VacationListItem />
      </GeneralProducts>
    </div>
  )
})