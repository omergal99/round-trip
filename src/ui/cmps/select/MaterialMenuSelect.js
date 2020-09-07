import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    zIndex: 50
  },
  popper: {
    zIndex: 60,
  },
});

export default function MaterialMenuSelect({ children, values, onSelect, buttonClass, iconStyle,
  forceButtonHover, textKeyName }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const onItemClicked = (value) => {
    onSelect(value);
    setOpen(false);
  };

  const handleClose = (ev) => {
    if (anchorRef.current && anchorRef.current.contains(ev.target)) return;
    setOpen(false);
  };

  function handleListKeyDown(ev) {
    if (ev.key === 'Tab') {
      ev.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const menuItemList = values.map(item => {
    return <MenuItem key={item.id} onClick={() => onItemClicked(item.id)}>
      <span>{item[textKeyName]}</span>
    </MenuItem>;
  })

  return (
    <div className={classes.root}>
      <Button className={`${classes.button} ${buttonClass} ${open ? forceButtonHover : ''}`}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {children}

        {values.length ? <>{open
          ? <KeyboardArrowUpIcon style={iconStyle} />
          : <KeyboardArrowDownIcon style={iconStyle} />}
        </> : null}
      </Button>

      <Popper className={classes.popper} open={open} anchorEl={anchorRef.current} role={undefined}
        transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow"
                  onKeyDown={handleListKeyDown}>
                  {menuItemList}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
