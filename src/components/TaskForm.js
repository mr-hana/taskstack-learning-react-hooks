import React, { useState, useContext } from 'react';
import styled from 'styled-components'
import { TasksContext } from '../context';
import { CurrentTaskContext, currentTaskInitialState } from '../context/CurrentTaskContext';
import TaskContent from './TaskContent';
import Durations from './Durations';

const TaskForm = () => {
  const [currentTask, setCurrentTask] = useState(currentTaskInitialState);
  const { setTasks } = useContext(TasksContext);
  const handleClick = () => {
    setTasks(prevState => {
      return [...prevState, currentTask];
    });
    setCurrentTask(currentTaskInitialState);
  }

  return (
    <Container>
      <CurrentTaskContext.Provider value={{ currentTask, setCurrentTask }}>
        <FormWrapper>
          <Input>
            <TaskContent context={CurrentTaskContext} />
          </Input>
          <Input>
            <Durations context={CurrentTaskContext} />
          </Input>
        </FormWrapper>
      </CurrentTaskContext.Provider>
      <div>
        <Button onClick={() => handleClick()}>登録</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const Input = styled.div`
  flex: 1 1 auto;
  margin: 0 auto;
`;

const Button = styled.button`
  padding: 3px 8px;
  width: 100%;
`;

export default TaskForm;