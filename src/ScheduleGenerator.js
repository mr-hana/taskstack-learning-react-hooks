import dateFns from 'date-fns';
import { createDays, range } from './Util';

const ScheduleGenerator = function (beginDate, endDate) {
  const schedule = function (beginDate, endDate) {
    const initialDurationValue = 0.0;
    const durationUnit = 0.5;
    let schedule = [];
    let index = null;
    let current = null;
    const createSchedule = day => {
      return {
        date: day,
        content: '',
        isShow: false
      };
    };

    const next = function () {
      if (index === null) {
        index = -1;
      }

      index++;
      current = schedule[index];
    };

    const nextFree = function () {
      next();
      if (dateFns.isWeekend(current.date)) {
        nextFree();
        return;
      }

      if (current.content !== '') {
        nextFree();
        return;
      }
    };

    return {
      init: function () {
        schedule = [];
        createDays(beginDate, endDate).forEach(day => {
          schedule.push(createSchedule(day));
          const pm = dateFns.addHours(day, 24 * durationUnit);
          schedule.push(createSchedule(pm));
        });

        index = null;
      },
      add: function (content, duration) {
        range(initialDurationValue, (duration - durationUnit), durationUnit).forEach(seed => {
          nextFree();
          current.content = content;
          if (seed === initialDurationValue) {
            current.isShow = true;
          }
        });
      },
      forEach: function (closure) {
        for (let i = 0; i < schedule.length; i++) {
          closure(schedule[i], i);
        }
      }
    }
  }(beginDate, endDate);

  return {
    generate: function (tasks) {
      schedule.init();
      tasks.forEach(task => {
        schedule.add(task.content, task.duration);
      });
    },
    getSchedule: function () {
      const list = [];
      schedule.forEach(item => {
        list.push(Object.assign({}, item));
      });

      return list;
    }
  };
};

export default ScheduleGenerator;