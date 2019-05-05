import React, { useContext } from 'react';
import styled, { css } from 'styled-components'
import { ScheduleContext } from '../context';
import { createOneMonthDays, formatDate } from '../Util';
import dateFns from 'date-fns';

const Month = (props) => {
  const days = createOneMonthDays(props.year, props.month);
  const { schedule } = useContext(ScheduleContext);
  console.log(schedule);
  const javascriptMonth = props.month - 1;
  const filteredSchedule = schedule.filter(task => dateFns.getMonth(task.date) === javascriptMonth);
  const monthlySchedule = [];
  days.forEach(date => {
    const tasks = filteredSchedule.filter(task => dateFns.isSameDay(date, task.date));
    const dayPlan = {
      date: date,
      am: '',
      pm: '',
      isHoliday: dateFns.isWeekend(date)
    };
    tasks.forEach(task => {
      if (!task.isShow) {
        return;
      }

      const halfday = (dateFns.getHours(task.date) < 12) ? 'am' : 'pm';
      if (dayPlan[halfday]) {
        dayPlan[halfday] += `, ${task.content}`;
      } else {
        dayPlan[halfday] = task.content;
      }
    });

    monthlySchedule.push(dayPlan);
  });

  return (
    <Container>
      <Header>{props.month}月</Header>
      {monthlySchedule.map(plan => (
        <DateWrapper key={plan.date} holiday={plan.isHoliday}>
          <DateCell>{plan.date.getDate()}({formatDate(plan.date, 'dd')})</DateCell>
          <PlanCell>{plan.am}</PlanCell>
          <PlanCell>{plan.pm}</PlanCell>
        </DateWrapper>))
      }
    </Container >
  );
}

const Border = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.borderColor};
`;

const Container = styled(Border)`
`;

const Header = styled.div`
  font-size: 24px;
  text-align: center;
`;

const DateWrapper = styled(Border)`
  display: flex;
  border-width: 1px 0 0 0;

  ${props => props.holiday
    ? css`background-color: #eee;`
    : css`background-color: white;`}
`;

const StyledCell = styled(Border)`
  padding: 2px 5px;
`;

const DateCell = styled(StyledCell)`
  border-width: 0;
  width: 50px;
  text-align: right;
`;

const PlanCell = styled(StyledCell)`
  border-width: 0 0 0 1px;
  min-width: 130px;
`;

export default Month;