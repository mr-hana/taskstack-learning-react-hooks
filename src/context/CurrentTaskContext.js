import React from 'react';

export const currentTaskInitialState = {
  content: '',
  duration: 0.5
};
export const CurrentTaskContext = React.createContext(currentTaskInitialState);