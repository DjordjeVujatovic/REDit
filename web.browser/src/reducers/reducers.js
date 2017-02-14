import { getJSON } from '../lib/fetch-json';

// ACTIONS ..
const FILTER = 'FILTER';
const VOTE_UP = 'VOTE_UP';
const VOTE_DOWN = 'VOTE_DOWN';
const SORT_POP = 'SORT_POP';
const SORT_NEW = 'SORT_NEW';
const UPDATE_POSTS = 'UPDATE_POSTS';
const UPDATE_WEEKS = 'UPDATE_WEEKS';
const LOADING_RESOURCE = 'LOADING_RESOURCE';

// ACTION CREATORS

// const updatePosts = posts => ({ type: 'UPDATE_POSTS', payload: posts });

const updateWeeks = weeks => ({ type: 'UPDATE_WEEKS', payload: weeks });

const updatePosts = posts => ({ type: 'UPDATE_POSTS', payload: posts });

const loadResource = () => ({ type: 'LOADING_RESOURCE' });

export const voteUp = postId => ({ type: 'VOTE_UP', payload: { postId } });

export const voteDown = id => ({ type: 'VOTE_DOWN', payload: { id } });

export const sortPopular = () => ({ type: 'SORT_POP' });

export const sortNew = () => ({ type: 'SORT_NEW' });

export const filterCategory = category => ({ type: 'FILTER', payload: { category } });


// THUNK

/*const weeksRequest = {
  method: 'GET',
  credentials: 'include',
  headers: new Headers({
    'Content-Type': 'application/json;charset=UTF-8',
  }),
};*/

export const fetchWeeks = () => dispatch => (
    getJSON('http://localhost:8000/api/weeks').then((res) => {
      dispatch(updateWeeks(res));
    })
  );
export const fetchPosts = () => dispatch => (
    getJSON('http://localhost:8000/api/posts/1').then((res) => {
      dispatch(updatePosts(res));
    })
  );

// POST REDUCERS

export const postReducer = ( state = [], action ) => { //eslint-disable-line
  switch (action.type) {
    case LOADING_RESOURCE:
      return { ...state, loadingResource: true };
    case UPDATE_POSTS:
      return [...state, ...action.payload];
    case VOTE_UP:
      return state.map((post) => {
        if (post.postId !== action.payload.postId) return post;
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
      return [...state].slice().sort((a, b) => parseInt(a.postId, 10) - parseInt(b.postId, 10));
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

// FILTER REDUCER

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case FILTER:
      return action.payload.category;
    default:
      return state;
  }
};



