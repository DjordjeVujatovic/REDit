import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postReducer, voteUp, popularityReducer, sortPopular, sortNew } from '../reducers/reducers';

const store = createStore(
  combineReducers({ postlist: postReducer }),
  composeWithDevTools(),
);

store.dispatch(sortPopular());
store.dispatch(sortNew());

export default store;
