import React from "react";
import { useHistory } from "react-router-dom";
import { formatTimestempToString, calcDaysBetweenTimestemps } from '../../../services/Utils';

import MaterialButton from '../../buttons/MaterialButton';
import Rating from '@material-ui/lab/Rating';

export default function VacationListItem(item) {
  console.log('VacationListItem');

  const history = useHistory();

  const goToVacationPreview = () => {
    history.push(`/vacation/${item.id}`);
  }

  return (
    <div className="vacation-list-item">
      <div className="wrap-image">
        <img className="image" src={item.hotel.imgSrc} alt={item.hotel.name} />
      </div>
      <div className="details">

        <div className="wrap-title">
          <h3 className="title">{item.hotel.name}</h3>
          <div className="rating">
            <Rating size="small" value={item.hotel.rating} readOnly />
          </div>
        </div>

        <div className="summary">
          <p>
            <span className="bold">יציאה:&nbsp;</span>
            <span className="inline-block">
              {formatTimestempToString(item.period.from)}
            </span>
          </p>
          <p>
            <span className="bold">חזרה:&nbsp;</span>
            <span className="inline-block">
              {formatTimestempToString(item.period.to)}
            </span>
          </p>
          <p className="bold">
            <span className="inline-block">
              <span>{calcDaysBetweenTimestemps(item.period.from, item.period.to)}</span>
              <span className="inline-block">&nbsp;לילות</span>
            </span>
            <span>&nbsp;|&nbsp;</span>
            <span className="inline-block">
              <span>{item.roomsAmount}</span>
              <span>&nbsp;חדרים</span>
            </span>
          </p>
        </div>

        <div className="wrap-btn">
          <MaterialButton className="button" variant="contained" color="primary">
            הצג חבילות נוספות למלון זה
        </MaterialButton>
        </div>
      </div>

      <div className="wrap-price">
        <div>
          <p className="price">${item.pricePerPerson}</p>
          <p className="text">מחיר ממוצע לאדם בחדר זוגי</p>
        </div>
        <MaterialButton variant="contained" color="secondary"
          onClick={goToVacationPreview}>
          פרטים נוספים
        </MaterialButton>
      </div>

    </div>
  )
}