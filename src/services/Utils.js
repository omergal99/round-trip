export const formatTimestempToString = (timestemp) => {
  const date = new Date(timestemp);
  const timeString = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
  const dateString = date.toLocaleDateString([], {
    day: '2-digit',
    month: '2-digit',
    // year: '2-digit',
  })
  return `${dateString} | ${timeString}`;
}

export const calcDaysBetweenTimestemps = (firstTimestemp, secondTimestemp) => {
  return Math.round(Math.abs((firstTimestemp - secondTimestemp) / (24 * 60 * 60 * 1000)));
}