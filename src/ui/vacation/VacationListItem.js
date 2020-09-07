import React from "react";
import VacationContext from '../../context/VacationContext';
import CoinContext from '../../context/CoinContext';
import { useHistory } from "react-router-dom";
import {
  formatTimestempToString, daysBetweenTimestemps,
  priceWithCommas, numToHebrewWord, numToHebrewWordLexical
} from '../../services/Utils';
import { vacationItemText } from '../../services/data/globalData';

import MaterialButton from '../cmps/buttons/MaterialButton';
import MaterialRating from '../cmps/rating/MaterialRating';


export default function VacationListItem(item) {
  // console.log('VacationListItem');

  const { setQuery } = React.useContext(VacationContext);
  const { curentCoin } = React.useContext(CoinContext);

  const history = useHistory();

  const goToVacationPreview = () => {
    history.push(`/vacation/${item.id}`);
  }

  const onSearchValue = () => {
    setQuery('searchValue', item.hotel.name);
  }

  const nightNumber = daysBetweenTimestemps(item.period.from, item.period.to);
  const nightsInWord = numToHebrewWord(nightNumber, vacationItemText.nights, vacationItemText.night);

  return (
    <div className="vacation-list-item">

      <div className="wrap-image">
        <img className="image" src={item.hotel.imgSrc} alt={item.hotel.name} />
      </div>

      <div className="details">
        <div className="wrap-title">
          <h3 className="title">{item.hotel.name}</h3>
          <div className="rating">
            <MaterialRating size="small" value={item.hotel.rating} readOnly={true}
              emptyIcon={<></>} style={{ paddingLeft: '8px' }} />
          </div>
        </div>

        <div className="summary">
          <p>
            <span className="bold">{vacationItemText.out}:&nbsp;</span>
            <span className="inline-block">
              {formatTimestempToString(item.period.from)}
            </span>
          </p>
          <p>
            <span className="bold">{vacationItemText.back}:&nbsp;</span>
            <span className="inline-block">
              {formatTimestempToString(item.period.to)}
            </span>
          </p>
          <p className="bold">
            <span className="inline-block">
              <span className="inline-block">{nightsInWord}</span>
            </span>
            <span>&nbsp;|&nbsp;</span>
            <span className="inline-block">
              <span>{numToHebrewWordLexical(item.roomsAmount, vacationItemText.rooms, vacationItemText.room)}</span>
            </span>
          </p>
        </div>

        <div className="wrap-btn">
          <MaterialButton className="button" variant="contained" color="primary"
            onClick={onSearchValue} >
            {vacationItemText.shoeMorePackegesToThisHotel}
          </MaterialButton>
        </div>
      </div>

      <div className="wrap-price">
        <div>
          <p className="price">{priceWithCommas(item.pricePerPerson, curentCoin.sign)}</p>
          <p className="text">{vacationItemText.AveragePricePerPersonInDoubleRoom}</p>
        </div>
        <MaterialButton variant="contained" color="secondary"
          onClick={goToVacationPreview}>
          <span>
            {vacationItemText.moreDetails}
          </span>
        </MaterialButton>
      </div>

    </div>
  )
}