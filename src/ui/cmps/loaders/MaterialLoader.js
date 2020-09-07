import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function MaterialLoader({ flexCenter, hide }) {
  const classes = useStyles();

  if (hide) return null;
  return (
    <div className={`${classes.root} ${flexCenter ? classes.flexCenter : ''}`}>
      <CircularProgress disableShrink />
    </div>
  );
}