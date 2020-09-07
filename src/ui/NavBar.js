import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { navBarCategories } from '../services/data/globalData';
import MaterialMenuSelect from '../ui/cmps/select/MaterialMenuSelect';
import MaterialTemporaryDrawer from '../ui/cmps/drawer/MaterialTemporaryDrawer';
import CoinContext from '../context/CoinContext';
import { coins } from '../services/data/globalData';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'var(--blue)',
    height: 'var(--navBar-height)',
    color: 'var(--font-color)',
    '& *': {
      fontFamily: '"Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
      fontWeight: 400,
    },
  },
  categories: {
    display: 'flex',
  },
  menuCategory: {
    fontSize: '1.1rem',
  },
  buttonSelectCategory: {
    display: 'flex',
    backgroundColor: 'transparent',
    color: 'var(--font-color)',
    margin: '0 0.75rem',
    padding: '0 0.25rem',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: 'var(--font-color)',
      color: 'var(--blue)',
    },
  },
  forceCategoryHover: {
    backgroundColor: 'var(--font-color)',
    color: 'var(--blue)',
  },
  buttonSelectCategoryMobile: {
    display: 'flex',
    justifyContent: 'end',
    backgroundColor: 'transparent',
    color: 'var(--blue)',
    padding: '1.5rem 1rem',
    width: '100%',
    borderRadius: 'initial',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: 'var(--blue)',
      color: 'var(--font-color)',
    },
  },
  forceCategoryHoverMobile: {
    backgroundColor: 'var(--blue)',
    color: 'var(--font-color)',
  },
  wrapLogoCoin: {
    height: '100%',
  },
  imgLogo: {
    height: '100%',
    cursor: 'pointer',
  },
  coinZindex: {
    zIndex: 200,
  },
  menuIcon: {
    cursor: 'pointer',
    padding: '8px',
    fontSize: 46,
  },
  menuStyle: {
    display: 'flex',
    direction: 'rtl',
    '& > ul': {
      width: '100%',
    },
  },
})

export default function NavBar() {
  // console.log('NavBar');
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:1024px)');
  const history = useHistory();

  const { curentCoin, setCurentCoin } = React.useContext(CoinContext);

  const onSelectCategory = id => {
    if (id === 'חבילות נופש') history.push('/');
    console.log(id, 'Clicked');
  }

  const onSelectCoin = id => {
    const newCoin = coins.find(item => item.id === id);
    setCurentCoin(newCoin);
  }

  const handleLogoClick = () => {
    history.push('/');
  }

  const list = navBarCategories.map(item => {
    return <MaterialMenuSelect key={item.title} onSelect={onSelectCategory} textKeyName={'id'}
      values={item.options || []}
      buttonClass={isDesktop ? classes.buttonSelectCategory : classes.buttonSelectCategoryMobile}
      forceButtonHover={isDesktop ? classes.forceCategoryHover : classes.forceCategoryHoverMobile}
      iconStyle={{ fontSize: 14, position: 'relative', bottom: '-1px', marginRight: '2px' }}>
      <span className={classes.menuCategory}>{item.title}</span>
    </MaterialMenuSelect>
  });

  const categoriesWithOptions = navBarCategories.reduce((acc, item) => {
    if (item.options) acc.push(item.title);
    return acc;
  }, []);

  return (
    <div className={`nav-bar ${classes.root} desktop-padding-left-right`} >
      <div className={classes.categories}>
        {isDesktop
          ? list
          : <MaterialTemporaryDrawer notActionWithText={categoriesWithOptions}
            categories={list}
            menuStyle={classes.menuStyle} >
            <MenuIcon className={classes.menuIcon} />
          </MaterialTemporaryDrawer>
        }
      </div>
      <div className={clsx('flex-center', classes.wrapLogoCoin, classes.coinZindex)}>

        <MaterialMenuSelect values={coins} textKeyName={'nameWithSign'} onSelect={onSelectCoin}
          buttonClass={classes.buttonSelectCategory} forceButtonHover={classes.forceCategoryHover}>
          <span>
            {curentCoin.name}&nbsp;{curentCoin.sign}&nbsp;
          </span>
        </MaterialMenuSelect>

        <img className={classes.imgLogo} alt="" onClick={handleLogoClick}
          src={require('../assets/img/headLogo.png')} />
      </div>
    </div >
  )
}