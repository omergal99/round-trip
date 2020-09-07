import React from "react";
import VacationContext from '../context/VacationContext';

import ProductList from '../ui/cmps/list/ProductList';
import MaterialLoader from '../ui/cmps/loaders/MaterialLoader';

import VacationFilter from '../ui/vacation/VacationFilter';
import VacationSorter from '../ui/vacation/VacationSorter';
import VacationListItem from '../ui/vacation/VacationListItem';
import VacationTitle from '../ui/vacation/VacationTitle';

export default function Vacations() {
  // console.log('VacationList');

  const { vacations, setVacations, isLoading } = React.useContext(VacationContext);

  const [sortedVacations, setSortedVacations] = React.useState(vacations);

  const onSort = obj => {
    const copySorted = [...sortedVacations];
    const newSorted = obj.sortFunc(copySorted);
    setSortedVacations(newSorted);
  }

  React.useEffect(() => {
    (() => { setVacations(); })();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    (() => { setSortedVacations(vacations); })();
  }, [vacations])

  if (vacations === null || sortedVacations === null) return <div className="space-center"
    style={{ minHeight: '100vh', paddingTop: '2rem' }}>
    <MaterialLoader />
  </div>;
  if (!vacations || !sortedVacations) return <div className="space-center"
    style={{ minHeight: '100vh', paddingTop: '2rem' }}>
    <span>אין תוצאות להצגה</span>
  </div>;

  return (
    <div className="vacations desktop-padding-left-right">
      <VacationFilter />
      <VacationSorter onSort={onSort} />

      {isLoading
        ? <div className="vacation-list space-center">
          <MaterialLoader />
        </div>
        : <div className="vacation-list">

          <VacationTitle vacationsLength={vacations.length} />

          <ProductList products={sortedVacations}>
            <VacationListItem />
          </ProductList>
        </div>
      }

    </div>
  )
}