import React from "react";
import CoinContext from '../../context/CoinContext';
import { priceWithCommas } from '../../services/Utils';
import { vacationFilterText } from '../../services/data/globalData';

import VacationContext from '../../context/VacationContext';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import RatingRatioSelectList from '../cmps/ratio/RatingRatioSelectList';
import RangeNumberFilter from '../cmps/range/RangeNumberFilter';
import RatioSelectList from '../cmps/ratio/RatioSelectList';
import MaterialSearchInput from '../cmps/inputs/MaterialSearchInput';
import CoverLayer from '../cmps/layout/CoverLayer';

import { MIN_MAX_PRICE_RANGE } from '../../constants/VacationConstants';

export default function VacationFilter() {
  // console.log('VacationFilter');
  const isDesktop = useMediaQuery('(min-width:768px)');

  const { curentCoin } = React.useContext(CoinContext);
  const { query, setQuery } = React.useContext(VacationContext);

  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  const toggleFilterOpen = () => {
    if (isDesktop && !isFilterOpen) return;
    setIsFilterOpen(!isFilterOpen);
  }

  const { ratings, priceRange, baseHosting, searchValue } = query;

  const handleRatingClick = id => {
    const newRatings = { ...ratings, [id]: { ...ratings[id], isSelect: !ratings[id].isSelect } };
    setQuery('ratings', newRatings);
  };

  const handleUpdateRange = newRange => {
    if (priceRange.min === newRange.min && priceRange.max === newRange.max) return;
    setQuery('priceRange', newRange);
  };

  const handleBaseHostingClick = id => {
    const newBaseHosting = { ...baseHosting, [id]: { ...baseHosting[id], isSelect: !baseHosting[id].isSelect } };
    setQuery('baseHosting', newBaseHosting);
  };

  const onSearchValue = value => {
    setQuery('searchValue', value);
  }

  return (
    <div className="list-filter">
      {!isDesktop && isFilterOpen &&
        <CoverLayer onClick={toggleFilterOpen} />
      }
      <div className={`header-title ${!isDesktop ? 'isMobile flex-center' : ''} 
      ${!isDesktop && isFilterOpen ? 'open' : 'close'}`}
        onClick={toggleFilterOpen}>
        <h3>&nbsp;{vacationFilterText.filterResults}</h3>
        {!isDesktop && <>{isFilterOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</>}
      </div>

      {(isDesktop || isFilterOpen) &&
        <div className={`main ${isFilterOpen && !isDesktop ? 'mobile' : ''}`}>
          <div className="filter-hotel-ratings">
            <h3>{vacationFilterText.hotelRate}</h3>
            <div className="ratings">
              <RatingRatioSelectList ratingRatios={Object.values(ratings)} onClick={handleRatingClick}
                extraTextFunc={item => priceWithCommas(item['lowerstPrice'], curentCoin.sign)}
                checkedKey={'isSelect'} />
            </div>
          </div>

          <hr />

          <div className="filter-price-per-person">
            <h3>{vacationFilterText.priceRangeToPerson}</h3>
            <div className="wrap-range-price-per-person">
              <RangeNumberFilter priceRange={priceRange} onUpdateRange={handleUpdateRange}
                minMaxRangeObj={MIN_MAX_PRICE_RANGE} coin={curentCoin.sign} />
            </div>
          </div>

          <hr />

          <div className="filter-base-hosting">
            <h3>{vacationFilterText.baseHosting}</h3>
            <div className="base-hosting">
              <RatioSelectList ratios={Object.values(baseHosting)} onClick={handleBaseHostingClick}
                extraTextFunc={item => priceWithCommas(item['lowerstPrice'], curentCoin.sign)}
                checkedKey={'isSelect'} />
            </div>
          </div>

          <hr />

          <div className="filter-search-words">
            <MaterialSearchInput placeholder={vacationFilterText.findByHotelName}
              value={searchValue} onSearchClick={onSearchValue} />
          </div>
        </div>
      }

    </div>
  )
}