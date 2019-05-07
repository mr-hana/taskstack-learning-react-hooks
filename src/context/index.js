import React, { useState, useEffect } from 'react';
import dateFns from 'date-fns';
import ScheduleGenerator from '../ScheduleGenerator';
export const TasksContext = React.createContext([]);
export const TasksProvider = TasksContext.Provider;

const today = new Date();
const beginDate = dateFns.startOfMonth(today);
const endDate = dateFns.endOfMonth(dateFns.addMonths(today, 2));

const termInitilState = {
  beginDate: beginDate,
  endDate: endDate,
};
export const TermContext = React.createContext(termInitilState);
export const TermProvider = TermContext.Provider;

export const ScheduleContext = React.createContext([]);
export const ScheduleProvider = ScheduleContext.Provider;

export const Provider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [term, setTerm] = useState(termInitilState);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const scheduleGenerator = ScheduleGenerator(term.beginDate, term.endDate);
    scheduleGenerator.generate(tasks);
    setSchedule(scheduleGenerator.getSchedule());
  }, [term, tasks]);

  return (
    <ScheduleProvider value={{ schedule }}>
      <TermProvider value={{ term, setTerm }}>
        <TasksProvider value={{ tasks, setTasks }}>
            {children}
        </TasksProvider>
      </TermProvider>
    </ScheduleProvider>
  );
}