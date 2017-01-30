import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { postReducer, weeksReducer } from './reducers/reducers';

export const store = createStore(
  combineReducers({
    postList: postReducer,
    weeks: weeksReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
