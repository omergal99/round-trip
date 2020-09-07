import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RtlWrapper from './RtlWrapper';

import CreateIcon from '@material-ui/icons/Create';
import EmailIcon from '@material-ui/icons/Email';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'baseline',
    gap: '1rem',
    paddingTop: '8rem',
    paddingBottom: '8rem',
  },
  title: {
    textAlign: 'right',
    color: 'var(--lightblue)',
    fontWeight: 'normal'
  },
  wrapForm: {
    width: '100%',
    gap: '2%',
  },
  textField: {
    backgroundColor: '#fffc',
  },
  fullWidth: {
    width: '100%',
  },
  margin: {
    margin: '1rem',
  },
  buttonStyle: {
    fontSize: '1.5rem',
  },
  backgroundCircle: {
    position: 'absolute',
    height: '21vw',
    width: '21vw',
    backgroundColor: '#eee',
    borderRadius: '50%',
    zIndex: '-20',
  },
  backgroundBigCircle: {
    position: 'absolute',
    height: '42vw',
    width: '42vw',
    backgroundColor: '#eee',
    borderRadius: '50%',
    zIndex: '-20',
  },
})

export default function JoinToClub() {
  // console.log('JoinToClub');
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:768px)');

  const formSubmit = () => {
    console.log('Form Submit!');
  }

  const fullNameCmp = <div className="flex-center">
    <CreateIcon style={{ fontSize: 18, marginLeft: '0.5rem' }} />
    <span>שם מלא</span>
  </div>

  const mailCmp = <div className="flex-center">
    <EmailIcon style={{ fontSize: 18, marginLeft: '0.5rem' }} />
    <span>דואר אלקטרוני</span>
  </div>

  const backgeoundCircles = <>
    <div className={classes.backgroundCircle} style={{ top: '21%', left: '3%' }}></div>
    <div className={classes.backgroundCircle} style={{ top: '23%', left: '-12%' }}></div>
    <div className={classes.backgroundCircle} style={{ top: '89%', left: '21%' }}></div>
    <div className={classes.backgroundCircle} style={{ top: '58%', left: '43%' }}></div>
    <div className={classes.backgroundCircle} style={{ top: '68%', left: '61%' }}></div>
    <div className={classes.backgroundBigCircle} style={{ top: '36%', left: '-7%' }}></div>
    <div className={classes.backgroundBigCircle} style={{ top: '16%', left: '76%' }}></div>
  </>;

  const fieldsMediaQuery = isDesktop ? classes.fullWidth : classes.margin;

  return (
    <div className={`desktop-padding-left-right ${classes.root}`}>
      {backgeoundCircles}
      <h2 className={classes.title} style={{ padding: isDesktop ? '1rem 0' : '1rem' }}>
        הצטרפו למועדון הלקוחות שלנו
      </h2>

      <div className={clsx(classes.wrapForm, isDesktop ? 'flex-between' : 'flex-col')}>
        <RtlWrapper>
          <TextField className={clsx(classes.textField, fieldsMediaQuery)}
            variant="outlined" label={fullNameCmp} />
        </RtlWrapper>

        <RtlWrapper>
          <TextField className={clsx(classes.textField, fieldsMediaQuery)}
            variant="outlined" label={mailCmp} />
        </RtlWrapper>

        <Button className={clsx(classes.buttonStyle, fieldsMediaQuery)}
          variant="contained" color="secondary" onClick={formSubmit}>
          <span>הרשם</span>
        </Button>
      </div>
    </div>

  )
}