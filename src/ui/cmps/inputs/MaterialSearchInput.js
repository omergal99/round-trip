import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    paddingRight: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 8,
  },
}));

export default function MaterialSearchInput({ value, placeholder = '', onSearchClick }) {
  const classes = useStyles();

  const [searchvalue, setSearchValue] = React.useState(value);

  React.useEffect(() => {
    setSearchValue(value);
  }, [value])

  const handleValueChange = ({ target }) => {
    setSearchValue(target.value);
  }

  const handleSearchClick = () => {
    if (!searchvalue && !value) return;
    onSearchClick(searchvalue);
  }

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={placeholder}
        onChange={handleValueChange}
        value={searchvalue}
        inputProps={{ 'aria-label': placeholder }}
      />
      <IconButton className={classes.iconButton} aria-label="search"
        onClick={handleSearchClick}>
        <SearchIcon style={{ fontSize: 30 }} color={searchvalue || value ? 'action' : 'disabled'} />
      </IconButton>
    </Paper>
  );
}