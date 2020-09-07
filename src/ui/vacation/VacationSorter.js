import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { vacationSorts, vacationSortsText } from '../../services/data/globalData';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import LoyaltyOutlinedIcon from '@material-ui/icons/LoyaltyOutlined';

import MaterialButton from '../cmps/buttons/MaterialButton';
import MaterialMenuSelect from '../cmps/select/MaterialMenuSelect';

import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickSortButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '& *': {
      fontFamily: '"Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
      fontWeight: 400,
    },
  },
  buttonSelect: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'var(--direction-name)',
    minWidth: 220,
    backgroundColor: 'transparent',
    color: 'var(--font-black)',
    margin: '0.5rem 0.75rem 0.5rem 0',
    padding: '0.5rem',
    '&:hover': {
      backgroundColor: 'var(--blue)',
      color: 'var(--font-color)',
    },
  },
  forceButtonHover: {
    backgroundColor: 'var(--blue)',
    color: 'var(--font-color)',
  },
  sortButton: {
    margin: '0.5rem 0.75rem 0.5rem 0',
    fontSize: '1.25rem',
  },
  buttonSelectTitle: {
    fontSize: '1.25rem',
    fontFamily: 'Assistant, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
    fontWeight: 600,
  },
  buttonSelectText: {
    fontSize: '1.25rem',
    fontFamily: 'Assistant, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
    fontWeight: 400,
  },
  dividerStyle: {
    margin: '1rem 1.5rem 1rem 1rem',
  }
});

export default function VacationSorter({ onSort }) {
  // console.log('VacationSorter');
  const classes = useStyles();

  const [sortBy, setSortBy] = React.useState(null);

  const onSelect = id => {
    const newSortBy = vacationSorts.find(item => item.id === id);
    setSortBy(newSortBy);
    onSort(newSortBy);
  }

  const styleButtonClicked = {
    color: 'var(--font-color)', bgColor: 'var(--blue)',
    bgHover: 'var(--blue-hover)'
  };
  const styleButton = {
    color: 'var(--font-black)', bgColor: 'transparent', bgHover: 'var(--blue)',
    hoverColor: 'var(--font-color)', boxShadow: 'none',
  };

  const buttonIcons = [<LocalAtmOutlinedIcon />, <FreeBreakfastOutlinedIcon />, <LoyaltyOutlinedIcon />];
  const selectShortNameButtons = vacationSorts.filter(item => item.shortName).map((item, idx) => {
    const customStyle = item.shortName !== sortBy?.shortName ? styleButton : styleButtonClicked;
    return <MaterialButton key={item.shortName}
      className={classes.sortButton} customStyle={customStyle}
      onClick={() => onSelect(item.id)}>
      {buttonIcons[idx]}
      <span>&nbsp;{item.shortName}</span>
    </MaterialButton>
  })

  return (
    <div className={classes.root}>
      <div className={`${classes.quickSortButtons} flex-grow`}>
        {selectShortNameButtons}
      </div>

      <div className="flex flex-wrap flex-grow">
        <Divider className={classes.dividerStyle} orientation="vertical" flexItem={true} />

        <MaterialMenuSelect values={vacationSorts} textKeyName={'longName'} onSelect={onSelect}
          buttonClass={classes.buttonSelect} forceButtonHover={classes.forceButtonHover}>
          <span>
            <span className={classes.buttonSelectTitle}>{vacationSortsText.sortBy}:&nbsp;</span>
            <span className={classes.buttonSelectText}>
              {sortBy?.longName || vacationSortsText.chooseFromResults}&nbsp;
              </span>
          </span>
        </MaterialMenuSelect>
      </div>
    </div>
  )
}