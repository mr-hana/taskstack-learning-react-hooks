import dateFns from 'date-fns';
import ja from 'date-fns/locale/ja';

export function range (start, end, seed = 1) {
  const length = (end - start + seed) / seed;
  return Array.from({ length: length }, (value, key) => start + (seed * key));
};

export function padZero (number, length = 2) {
  return ("00" + number).slice(-length);
}

export function formatDate(date, formatString) {
  // localeはProviderで渡したい
  return dateFns.format(date, formatString, {locale: ja});
}

export function createDays(beginDate, endDate) {
  const diffDays = dateFns.differenceInCalendarDays(endDate, beginDate);
  const days = range(0, diffDays).map(day => {
    return dateFns.addDays(beginDate, day);
  });

  return days;
}

export function createOneMonthDays(year, month) {
  const monthIndex = month - 1;
  const firstDate = new Date(year, monthIndex, 1);
  const lastDate = dateFns.endOfMonth(firstDate);
  return createDays(firstDate, lastDate);
}