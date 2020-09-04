import React from "react";
import Rating from '@material-ui/lab/Rating';
import MaterialRatioMultiSelect from '../../ratio/MaterialRatioMultiSelect';

export default function ListFilter() {
  console.log('ListFilter');

  const initRatingFilter = {
    '1': { id: 1, isSelect: true },
    '2': { id: 2, isSelect: true },
    '3': { id: 3, isSelect: true },
    '4': { id: 4, isSelect: true },
    '5': { id: 5, isSelect: true },
  }

  const [ratingFilter, setRatingFilter] = React.useState(initRatingFilter);

  const handleRatingClick = id => {
    const copy = { ...ratingFilter, [id]: { id, isSelect: !ratingFilter[id].isSelect } };
    console.log('copy', copy);
    setRatingFilter(copy);
  };

  return (
    <div className="list-filter">
      <div className="header-title">
        <h3>סינון תוצאות</h3>
      </div>

      <div className="main">

        <div className="filter-hotel-rating">
          <h3>דירוג מלון</h3>
          <div className="rating">
            <MaterialRatioMultiSelect arr={Object.values(ratingFilter)} onClick={handleRatingClick}
              cmp={<Rating readOnly />} />
          </div>
        </div>

        <div className="filter-price-per-person">
          <h3>טווח מחיר לאדם</h3>
        </div>

        <div className="filter-base-hosting">
          <h3>בסיס אירוח</h3>
        </div>

        <div className="filter-search-words">
          <input type="text" placeholder="חיפוש לפי שם מלון" />
        </div>

      </div>

    </div>
  )
}