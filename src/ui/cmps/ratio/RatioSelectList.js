import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import MaterialWhiteRatio from '../../cmps/ratio/MaterialWhiteRatio';

const useStyles = makeStyles((theme) => ({
  paddingBottom: {
    paddingBottom: theme.spacing(1),
  }
}));

export default function RatioSelectList({ ratios, onClick, checkedKey,extraTextFunc }) {
  // console.log('RatioSelectList');
  const classes = useStyles();

  const ratioList = ratios.map(item => {
    return <div className="flex-between" key={item.id}>
      <div className="flex-center">
        <MaterialWhiteRatio checked={item[checkedKey]} onClick={() => onClick(item.id)}
          value={item.id} name="radio-button-base-hosting" />
        <span className={classes.paddingRight}>{item.value}</span>
      </div>
      <span className={classes.paddingRight}>{extraTextFunc(item) || ''}</span>
    </div>
  })

  return (
    <>
      {ratioList}
    </>
  )
}