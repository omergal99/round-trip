import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    height: '100%',
    width: '100vw',
    top: 0,
    left: 0,
    zIndex: '100',
  },
});

export default function CoverLayer({ onClick }) {
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={onClick}></div>
  )
}