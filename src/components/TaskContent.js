import React, { useContext } from 'react';
import { CurrentTaskContext } from '../context/CurrentTaskContext';
import Input from './Input';

const TaskContent = props => {
  const { currentTask, setCurrentTask } = useContext(CurrentTaskContext);
  const handleChange = e => {
    const content = e.target.value;
    setCurrentTask(prevState => {
      return { ...prevState, content };
    });
  }

  return (<Input type='text' value={currentTask.content} onChange={handleChange} />);
}

export default TaskContent;