import React, { useContext } from 'react';
import styled from 'styled-components'
import { TermContext } from '../context';
import dateFns from 'date-fns';
import { range } from '../Util';
import Month from './Month';

const Calendar = () => {
  const { term } = useContext(TermContext);
  const diffMonths = dateFns.differenceInCalendarMonths(term.endDate, term.beginDate);
  const beginMonth = dateFns.startOfMonth(term.beginDate);
  const months = range(0, diffMonths)
    .map(index => {
      const month = dateFns.addMonths(beginMonth, index);
      return (<Month key={month.getTime()} year={month.getFullYear()} month={month.getMonth() + 1} />)
    });

  return (<Container>{months}</Container>);
}

const Container = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
`;

export default Calendar;