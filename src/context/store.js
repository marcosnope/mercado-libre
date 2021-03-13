import React, { createContext, useContext, useReducer } from 'react';
import logger from 'use-reducer-logger';

export const AppContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <AppContext.Provider value={useReducer(logger(reducer), initialState)}>
    {children}
  </AppContext.Provider>
);

export const useStateValue = () => useContext(AppContext);
