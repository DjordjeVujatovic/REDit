import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { postReducer, weeksReducer, filterReducer } from './reducers/reducers';

export const store = createStore(
  combineReducers({
    postList: postReducer,
    weeks: weeksReducer,
    filter: filterReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
