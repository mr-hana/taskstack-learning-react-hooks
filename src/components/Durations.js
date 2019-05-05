import React, { useContext } from 'react';
import { CurrentTaskContext } from '../context/CurrentTaskContext';
import { range } from '../Util';
import Select from './Select';

const Durations = props => {
  const { currentTask, setCurrentTask } = useContext(CurrentTaskContext);
  const handleChange = e => {
    const duration = e.target.value;
    setCurrentTask(prevState => {
      return {...prevState, duration};
    });
  }

  return  (<Select value={currentTask.duration} onChange={handleChange}>
    {range(0.5, 5.0, 0.5).map(val => (
      <option key={val} value={val.toFixed(1)}>{val.toFixed(1)}</option>))}
  </Select>);
}

export default Durations;