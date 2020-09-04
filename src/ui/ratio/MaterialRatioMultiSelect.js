import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles((theme) => ({
  wrapDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  stars: {
    justifyContent: 'space-evenly',
    flexGrow: 1,
  },
  paddingRight: {
    paddingRight: theme.spacing(1),
  }
}));

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

export default function MaterialRatioMultiSelect({ arr, onClick, cmp }) {
  const classes = useStyles();

  const list = arr.map((item) => {
    const childProps = { value: item.id, className: classes.stars };
    return <div className={classes.wrapDiv} key={item.id}>
      <WhiteRadio
        checked={item.isSelect}
        onClick={() => onClick(item.id)}
        value={item.id}
        name="radio-button"
      />
      {React.cloneElement(cmp, childProps)}
      <span className={classes.paddingRight}>$819</span>
    </div>
  })

  return (
    <div>
      {list}
    </div>
  );
}
