import { getJson } from '../lib/fetch-json';

// ACTIONS ..

const VOTE_UP = 'VOTE_UP';
const VOTE_DOWN = 'VOTE_DOWN';
const SORT_POP = 'SORT_POP';
const SORT_NEW = 'SORT_NEW';
const UPDATE_POSTS = 'UPDATE_POSTS';
const UPDATE_WEEKS = 'UPDATE_WEEKS';
const LOADING_RESOURCE = 'LOADING_RESOURCE';

// ACTION CREATORS

const updatePosts = posts => ({ type: 'UPDATE_POSTS', payload: posts });

const updateWeeks = weeks => ({ type: 'UPDATE_WEEKS', payload: weeks});

const loadResource = () => ({ type: LOADING_RESOURCE });

export const voteUp = id => ({ type: 'VOTE_UP', payload: { id } });

export const voteDown = id => ({ type: 'VOTE_DOWN', payload: { id } });

export const sortPopular = () => ({ type: 'SORT_POP' });

export const sortNew = () => ({ type: 'SORT_NEW' });

// THUNK

export const fetchPosts = () => {
  return (dispatch) => {
    getJson('http://localhost:8000/posts').then((res) => {
      dispatch(updatePosts(res));
    });
  };
};

export const fetchWeeks = () => {
  return (dispatch) => {
    getJson('http://localhost:8000/weeks').then((res) => {
      dispatch(updateWeeks(res));
    });
  };
};

// POST REDUCERS

export const postReducer = ( state = [], action) => { //eslint-disable-line
  switch (action.type) {
    case LOADING_RESOURCE:
      return { ...state, loadingResource: true };
    case UPDATE_POSTS:
      return [...state, ...action.payload];
    case VOTE_UP:
      return state.map((post) => {
        if (post.id !== action.payload.id) return post;
        return { ...post, votes: post.votes + 1 };
      });
    case VOTE_DOWN:
      return state.map((post) => {
        if (post.id !== action.payload.id) return post;
        return { ...post, votes: post.votes - 1 };
      });
    case SORT_POP:
      return [...state].slice().sort((a, b) => (b.votes - a.votes));
    case SORT_NEW:
      return [...state].slice().sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));
    default:
      return state;
  }
};

// WEEKS REDUCER

export const weeksReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_WEEKS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

