import { INIT_COIN_SIGN } from '../constants/VacationConstants';

export const formatTimestempToString = (timestemp) => {
  const date = new Date(timestemp);
  const timeString = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
  // 'en-GB' - British English uses day-month-year order
  const dateString = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    // year: '2-digit',
  })
  return `${dateString} | ${timeString}`;
}

export const daysBetweenTimestemps = (firstTimestemp, secondTimestemp) => {
  return Math.round(Math.abs((firstTimestemp - secondTimestemp) / (24 * 60 * 60 * 1000)));
}

const getRatioCoinBySigns = (from, to) => {
  const coinsSingsAndValues = [
    { id: 'USD', sign: '$', value: 3.5, },
    { id: 'ILS', sign: '₪', value: 1, },
    { id: 'EUR', sign: '€', value: 4, },
  ]
  const fromValue = coinsSingsAndValues.find(coin => coin.sign === from).value;
  const toValue = coinsSingsAndValues.find(coin => coin.sign === to).value;
  return fromValue / toValue;
}

export const priceWithCommas = (number, coinSign = '') => {
  if (!number) return number;
  if (coinSign && INIT_COIN_SIGN !== coinSign) {
    const convertNumber = Number((getRatioCoinBySigns(INIT_COIN_SIGN, coinSign) * number).toFixed(0));
    return coinSign + convertNumber.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  return coinSign + number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export const sleep = ms => new Promise(res => setTimeout(res, ms));

export const numToHebrewWord = (number, wordToAdd, wordSingle) => {
  const hardCodedNumbersInHebrew = ['אפס', 'אחד', 'שני', 'שלושה',
    'ארבעה', 'חמישה', 'שישה', 'שבעה', 'שמונה', 'תשעה', 'עשרה', 'אחד עשרה',
    'שניים עשרה', 'שלושה עשר', 'ארבעה עשר', 'חמישה עשר'];
  if (number === 1) return wordSingle + ' ' + hardCodedNumbersInHebrew[1];
  else return hardCodedNumbersInHebrew[number] + ' ' + wordToAdd;
}

export const numToHebrewWordLexical = (number, wordToAdd, wordSingle) => {
  const hardCodedNumbersInHebrew = ['אין', 'בלבד', 'שני', 'שלושה',
    'ארבעה', 'חמישה', 'שישה', 'שבעה', 'שמונה', 'תשעה', 'עשרה', 'אחד עשרה',
    'שניים עשרה', 'שלושה עשר', 'ארבעה עשר', 'חמישה עשר'];
  if (number === 1) return wordSingle + ' ' + hardCodedNumbersInHebrew[1];
  else return hardCodedNumbersInHebrew[number] + ' ' + wordToAdd;
}
