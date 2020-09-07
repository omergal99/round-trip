import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const WhiteRadio = withStyles({
  root: {
    color: grey[50],
    transition: 'all 0.3s',
    '&$checked': {
      color: grey[100],
    },
    '&:hover': {
      backgroundColor: `${grey[200]}10`,
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function MaterialWhiteRatio({ checked, value, name, onClick }) {

  return (
    <WhiteRadio
      checked={checked}
      onClick={onClick}
      value={value}
      name={name}
    />
  );
}
