// WaterContext.js
import React, { createContext, useReducer } from 'react';

// Initial state for water intake history and goal
const initialState = {
  history: [],
  goal: 2000, // Default goal of 2000ml
};

// Actions
const ACTIONS = {
  ADD_WATER: 'ADD_WATER',
  SET_GOAL: 'SET_GOAL',
};

// Reducer function to handle actions
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_WATER:
      return { ...state, history: [...state.history, action.payload] };
    case ACTIONS.SET_GOAL:
      return { ...state, goal: action.payload };
    default:
      return state;
  }
};

// Create context and provide state and dispatch function to child components
export const WaterContext = createContext();

export const WaterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addWater = (waterIntake) => {
    dispatch({ type: ACTIONS.ADD_WATER, payload: waterIntake });
  };

  const setGoal = (newGoal) => {
    dispatch({ type: ACTIONS.SET_GOAL, payload: newGoal });
  };

  return (
    <WaterContext.Provider value={{ state, addWater, setGoal }}>
      {children}
    </WaterContext.Provider>
  );
};
