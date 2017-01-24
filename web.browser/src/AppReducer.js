import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postReducer, voteUp } from './reducers/reducers';

export const store = createStore(
  combineReducers({ posts: postReducer }),
  composeWithDevTools(),
);

store.dispatch(voteUp('1'));
store.dispatch(voteUp('1'));
store.dispatch(voteUp('1'));
