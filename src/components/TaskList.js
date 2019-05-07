import React, { useContext } from 'react';
import { TasksContext } from '../context';

const TaskList = () => {
  const { tasks } = useContext(TasksContext);
  const taskItems = tasks.map((task, index) =>
    <div key={index}>{task.content} : {task.duration}</div>);

  return (
    <div>
      <div>{taskItems}</div>
    </div>
  );
}

export default TaskList;