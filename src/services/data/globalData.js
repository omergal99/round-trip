export const footer = {
  footerLinks: [
    {
      title: 'טיסות לחו"ל',
      links: [
        'טיסות לברלין',
        'טיסות לפריז',
        'טיסות לכרתים',
        'טיסות ללונדון',
        'טיסות לפראג',
      ]
    },
    {
      title: 'נופש למשפחות',
      links: [
        'טיסות לברלין',
        'טיסות לפריז',
        'טיסות לכרתים',
        'טיסות ללונדון',
        'טיסות לפראג',
      ]
    },
    {
      title: 'נופש לזוגות',
      links: [
        'טיסות לברלין',
        'טיסות לפריז',
        'טיסות לכרתים',
        'טיסות ללונדון',
        'טיסות לפראג',
      ]
    },
    {
      title: 'כללי',
      links: [
        'צור קשר',
        'עלינו',
        'תנאים',
        'שירות לקוחות',
      ]
    }
  ],
  copyrights: '2018 כל הזכויות שמורות Alrey',
}

export const coins = [
  {
    id: 'USD',
    sign: '$',
    name: 'USD',
    nameWithSign: 'USD $',
  },
  {
    id: 'ILS',
    sign: '₪',
    name: 'ILS',
    nameWithSign: 'ILS ₪',
  },
  {
    id: 'EUR',
    sign: '€',
    name: 'EUR',
    nameWithSign: 'EUR €',
  },
]

export const vacationSorts = [
  {
    id: 'sordId-10',
    shortName: 'הכי זול', longName: 'מחיר, מהנמוך לגבוה',
    sortFunc: arr => {
      return arr.sort((a, b) => a.pricePerPerson - b.pricePerPerson);
    }
  },
  {
    id: 'sordId-11',
    shortName: '', longName: 'מחיר, מהגבוה לנמוך',
    sortFunc: arr => {
      return arr.sort((a, b) => b.pricePerPerson - a.pricePerPerson);
    }
  },
  {
    id: 'sordId-12',
    shortName: 'הכי פופולרי', longName: 'פופולריות, מהגבוהה לנמוכה',
    sortFunc: arr => {
      return arr.sort((a, b) => b.hotel.rating - a.hotel.rating);
    }
  },
  {
    id: 'sordId-13',
    shortName: '', longName: 'פופולריות, מהנמוכה לגבוהה',
    sortFunc: arr => {
      return arr.sort((a, b) => a.hotel.rating - b.hotel.rating);
    }
  },
  {
    id: 'sordId-14',
    shortName: 'הכי משתלם', longName: 'משתלם, מחיר לפי לילה הזול',
    sortFunc: arr => {
      return arr.sort((a, b) => {
        if (a.pricePerPerson / a.maxPersonInRoom > b.pricePerPerson / b.maxPersonInRoom) {
          return 1;
        }
        if (a.pricePerPerson / a.maxPersonInRoom < b.pricePerPerson / b.maxPersonInRoom) {
          return -1;
        }
        return 0;
      })
    }
  },
  {
    id: 'sordId-15',
    shortName: '', longName: 'משתלם, מחיר לפי לילה היקר',
    sortFunc: arr => {
      return arr.sort((a, b) => {
        if (b.pricePerPerson / b.maxPersonInRoom > a.pricePerPerson / a.maxPersonInRoom) {
          return 1;
        }
        if (b.pricePerPerson / b.maxPersonInRoom < a.pricePerPerson / a.maxPersonInRoom) {
          return -1;
        }
        return 0;
      })
    }
  },
]

export const vacationSortsText = {
  sortBy: 'מיין לפי',
  chooseFromResults: 'בחר מהאפשרויות',
  results: 'תוצאות',
}

export const navBarCategories = [
  { title: 'דף הבית' },
  {
    title: 'חבילות נופש',
    options: [
      { id: 'חבילות נופש' },
      { id: 'מבצעים לחודש ספטמבר-20' },
      { id: 'הטבות לחברי מועדון' }
    ],
  },
  {
    title: 'טיסות',
    options: [
      { id: 'טיסות קונקשיין' },
      { id: 'טיסות אל-על' },
      { id: 'טיסות ישירות' },
    ],
  },
  {
    title: 'טיולים מאורגנים',
    options: [
      { id: 'כל הטיולים' },
      { id: 'טיולים בצפון' },
      { id: 'טיולים בירושלים' },
    ],
  },
  { title: 'צור קשר' },
]

export const vacationItemText = {
  cleanResultsByHotel: 'נקה סינון לפי מלון',
  totalFound: 'סה"כ נמצאו',
  results: 'תוצאות',
  noResultsFound: 'תוצאות',
  AveragePricePerPersonInDoubleRoom: 'מחיר ממוצע לאדם בחדר זוגי',
  out: 'יציאה',
  back: 'חזרה',
  nights: 'לילות',
  night: 'לילה',
  room: 'חדר',
  rooms: 'חדרים',
  moreDetails: 'פרטים נוספים',
  shoeMorePackegesToThisHotel: 'הצג חבילות נוספות למלון זה',
}

export const vacationFilterText = {
  filterResults: 'סינון תוצאות',
  hotelRate: 'דירוג מלון',
  priceRangeToPerson: 'טווח מחיר לאדם',
  baseHosting: 'בסיס אירוח',
  findByHotelName: 'חיפוש לפי שם מלון',
}