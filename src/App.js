import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import theme from './styles/theme';
import { Provider } from './context';
import Term from './components/Term';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Calendar from './components/Calendar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Container>
          <FormWrapper>
            <Term />
            <TaskForm />
            <TaskList />
          </FormWrapper>
          <CalendarWrapper>
            <Calendar />
          </CalendarWrapper>
        </Container>
      </Provider>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  padding: 10px;
`;

const FormWrapper = styled.div`
  flex: 0 0 240px;
`;

const CalendarWrapper = styled.div`
  margin: 0 10px;
  overflow-x: auto;
`;

export default App;
