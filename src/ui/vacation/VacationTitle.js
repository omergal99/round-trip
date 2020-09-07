import React from "react";
import VacationContext from '../../context/VacationContext';
import { makeStyles } from '@material-ui/core/styles';
import { vacationItemText } from '../../services/data/globalData';
const useStyles = makeStyles({
  headerStyle: {
    color: 'var(--lightblue)',
    textAlign: 'var(--direction-name)',
    padding: '1rem 0',
    fontFamily: '"Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
    fontWeight: 500,
  },
  link: {
    textDecoration: 'underline',
    color: 'var(--lightblue)',
    cursor: 'pointer',
  }
});
export default function VacationTitle({ vacationsLength }) {
  // console.log('VacationTitle');
  const classes = useStyles();

  const { query, setQuery } = React.useContext(VacationContext);

  const onCleanSearchValue = () => {
    setQuery('searchValue', '');
  }

  return (
    <div className="flex-between flex-wrap">
      {vacationsLength > 0 ?
        <h3 className={classes.headerStyle}>
          <span>{vacationItemText.totalFound}&nbsp;</span>
          <span>{vacationsLength}</span>
          <span>&nbsp;{vacationItemText.results}</span>
        </h3>
        :
        <h3 className={classes.headerStyle}>
          <span>{vacationItemText.noResultsFound}</span>
        </h3>
      }
      {query.searchValue &&
        <p className={classes.link} onClick={onCleanSearchValue}>
          {vacationItemText.cleanResultsByHotel}
        </p>
      }
    </div>
  )
}