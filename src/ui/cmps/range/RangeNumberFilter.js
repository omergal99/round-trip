import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { priceWithCommas } from '../../../services/Utils';

import MaterialRangeSlider from '../../cmps/range/MaterialRangeSlider';

const useStyles = makeStyles((theme) => ({
  paddingBottom: {
    paddingBottom: theme.spacing(1),
  }
}));

export default function RangeNumberFilter({ priceRange, onUpdateRange, coin = '', minMaxRangeObj }) {
  // console.log('RangePriceFilter');
  const classes = useStyles();
  return (
    <>
      <div className={`flex-between ${classes.paddingBottom}`}>
        <span>{priceWithCommas(priceRange.max, coin)}</span>
        <span>{priceWithCommas(priceRange.min, coin)}</span>
      </div>
      <MaterialRangeSlider minMaxObj={minMaxRangeObj} currRange={priceRange}
        onUpdateRange={onUpdateRange} coin={coin} />
    </>
  )
}