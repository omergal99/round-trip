import vacationsJSON from './data/vacations.json';
import { MIN_MAX_PRICE_RANGE, IS_DEMO_LOADING } from '../constants/VacationConstants';
import { sleep } from './Utils';

export const getVacations = async (query) => {
  if (IS_DEMO_LOADING) await sleep(500);
  const ratingsSelected = Object.values(query.ratings).filter(item => item.isSelect);
  if (!ratingsSelected.length) return Promise.resolve([]);
  return Promise.resolve(vacationsJSON.filter((item, idx) => {
    return item.pricePerPerson >= query.priceRange.min
      && item.pricePerPerson <= query.priceRange.max
      && ratingsSelected.some(rating => rating.id === item.hotel.rating)
      && query.baseHosting['lodging'].isSelect === item.hotel.lodging
      && query.baseHosting['breakfast'].isSelect === item.hotel.breakfast
      && (!query.searchValue || item.hotel.name.toLowerCase().includes(query.searchValue.toLowerCase()))
  }
  ));
}

export const getInitQuery = () => {
  const sortLowPrice = [...vacationsJSON].sort((a, b) => a.pricePerPerson - b.pricePerPerson);
  const lodgingLowerstPrice = sortLowPrice.find(item => item.hotel.lodging).pricePerPerson;
  const breakfastLowerstPrice = sortLowPrice.find(item => item.hotel.breakfast).pricePerPerson;
  const rating1LowerstPrice = sortLowPrice.find(item => item.hotel.rating === 1).pricePerPerson;
  const rating2LowerstPrice = sortLowPrice.find(item => item.hotel.rating === 2).pricePerPerson;
  const rating3LowerstPrice = sortLowPrice.find(item => item.hotel.rating === 3).pricePerPerson;
  const rating4LowerstPrice = sortLowPrice.find(item => item.hotel.rating === 4).pricePerPerson;
  const rating5LowerstPrice = sortLowPrice.find(item => item.hotel.rating === 5).pricePerPerson;
  return {
    ratings: {
      '1': { id: 1, value: 1, isSelect: true, lowerstPrice: rating1LowerstPrice },
      '2': { id: 2, value: 2, isSelect: true, lowerstPrice: rating2LowerstPrice },
      '3': { id: 3, value: 3, isSelect: true, lowerstPrice: rating3LowerstPrice },
      '4': { id: 4, value: 4, isSelect: true, lowerstPrice: rating4LowerstPrice },
      '5': { id: 5, value: 5, isSelect: true, lowerstPrice: rating5LowerstPrice },
    },
    baseHosting: {
      'lodging': { id: 'lodging', value: 'לינה', isSelect: true, lowerstPrice: lodgingLowerstPrice },
      'breakfast': { id: 'breakfast', value: 'ארוחת בוקר', isSelect: true, lowerstPrice: breakfastLowerstPrice },
    },
    priceRange: MIN_MAX_PRICE_RANGE,
    searchValue: '',
  }
}

