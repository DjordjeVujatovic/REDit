import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postReducer } from './reducers/reducers';
import mockData from './mock-data';

const weeksInitialState = mockData.weeks;

const weeksState = (state = weeksInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


export const store = createStore(
  combineReducers({ 
    posts: postReducer,
    weeks: weeksState,
  }),
  composeWithDevTools(),
);

