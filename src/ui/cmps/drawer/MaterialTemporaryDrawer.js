import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function MaterialTemporaryDrawer({ children, categories, menuStyle, notActionWithText }) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (ev) => {
    if (ev.type === 'keydown' && (ev.key === 'Tab' || ev.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const checkNotNastedToClose = (ev, anchor) => {
    const toSkip = notActionWithText.some(text => ev.target.textContent === text);
    if(!toSkip) toggleDrawer(anchor, false)(ev);
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, menuStyle, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={(ev) => checkNotNastedToClose(ev, anchor)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {categories}
      </List>
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          {React.cloneElement(children, { onClick: toggleDrawer(anchor, true) })}
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
