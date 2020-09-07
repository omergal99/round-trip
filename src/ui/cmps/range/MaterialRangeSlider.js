import React from 'react';
import { priceWithCommas } from '../../../services/Utils';

import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

const WhiteSlider = withStyles({
  root: {
    color: grey[50],
    transition: 'all 0.3s',
  },
})((props) => <Slider {...props} />);

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: 'var(--blue)',
    color: 'white',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
  arrow: {
    color: '#f5f5f9',
  },
}))(Tooltip);

function ValueLabelComponent({ children, open, value }) {
  return (
    <HtmlTooltip arrow open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </HtmlTooltip>
  );
}

const convertRangeValueToOriginalValue = (value, minMaxObj) => {
  return Number(((value * (minMaxObj.max - minMaxObj.min) / 100) + minMaxObj.min).toFixed(0));
}

const convertCurrValueToRangeValue = (currRange, minMaxObj) => {
  const diff = (minMaxObj.max - minMaxObj.min);
  return [
    Number(((currRange.min - minMaxObj.min) / diff * 100).toFixed(0)),
    Number(((currRange.max - minMaxObj.min) / diff * 100).toFixed(0))
  ]
}

export default function MaterialRangeSlider({ minMaxObj, currRange, onUpdateRange, coin }) {
  const classes = useStyles();

  const [value, setValue] = React.useState(convertCurrValueToRangeValue(currRange, minMaxObj));

  const handleChange = (ev, newValue) => {
    setValue(newValue);
  };

  const handleChangeCommitted = (ev, newValue) => {
    onUpdateRange({
      min: convertRangeValueToOriginalValue(newValue[0], minMaxObj),
      max: convertRangeValueToOriginalValue(newValue[1], minMaxObj)
    })
  };

  return (
    <div className={classes.root}>
      <WhiteSlider
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
        scale={(x) => convertRangeValueToOriginalValue(x, minMaxObj)}
        valueLabelDisplay="auto"
        valueLabelFormat={(x) => priceWithCommas(x, coin)}
        ValueLabelComponent={ValueLabelComponent}
        aria-labelledby="range-slider"
      />
    </div>
  );
}
