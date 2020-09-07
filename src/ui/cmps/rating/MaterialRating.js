import React from "react";
import { withStyles } from '@material-ui/styles'
import Rating from '@material-ui/lab/Rating';

export default function MaterialRating({ value, readOnly = false, size = 'medium',
  style = {}, ...otherProps }) {

  const StyledRating = withStyles({
    iconFilled: {
      color: '#ffa767',
    },
    iconEmpty:{
      color: '#ffffff33',
    }
  })(Rating);

  const iconContainer = ({ ...other }) => {
    return <span style={style} {...other} />;
  }

  return (
    <StyledRating size={size} value={value} readOnly={readOnly}
      IconContainerComponent={iconContainer}
      {...otherProps} />
  )
}
