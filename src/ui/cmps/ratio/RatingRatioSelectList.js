import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import MaterialRating from '../../cmps/rating/MaterialRating';
import MaterialWhiteRatio from '../../cmps/ratio/MaterialWhiteRatio';

const useStyles = makeStyles((theme) => ({
  wrapRating: {
    display: 'flex',
    alignItems: 'center',
  },
  ratingStars: {
    justifyContent: 'space-evenly',
    flexGrow: 1,
  },
  paddingRight: {
    paddingRight: theme.spacing(1),
  },
}));

export default function RatingRatioSelectList({ ratingRatios, onClick, checkedKey, extraTextFunc }) {
  // console.log('RatingRatioSelectList');
  const classes = useStyles();

  const ratingRatioList = ratingRatios.map(item => {
    return <div className={classes.wrapRating} key={item.id}>
      <MaterialWhiteRatio checked={item[checkedKey]} onClick={() => onClick(item.id)}
        value={item.id} name="radio-button-rating" />
      <MaterialRating className={classes.ratingStars} value={item.id} readOnly={true} />
      <span className={classes.paddingRight}>{extraTextFunc(item) || ''}</span>
    </div>
  })

  return (
    <>
      {ratingRatioList}
    </>
  )
}