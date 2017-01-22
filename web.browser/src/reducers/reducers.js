import mockData from '../mock-data';

const VOTE_UP = 'VOTE_UP';

export const voteUp = id => ({
  type: 'VOTE_UP',
  payload: { id },
});

export const voteDown = id => ({
  type: 'VOTE_DOWN',
  payload: { id },
});

export const sortPopular = () => ({
  type: 'SORT_POP',
});

export const sortNew = () => ({
  type: 'SORT_NEW',
});


const postdata = mockData.posts;

export const postReducer = (postlist = postdata, action) => { //eslint-disable-line
  switch (action.type) {
    case VOTE_UP:
      return postlist.map((post) => {
        if (post.id !== action.payload.id) return post;
        return { ...post, votes: post.votes + 1 };
      });
    case 'VOTE_DOWN':
      return postlist.map((post) => {
        if (post.id !== action.payload.id) return post;
        return { ...post, votes: post.votes - 1 };
      });
    case 'SORT_POP':
      return postlist.slice().sort((a, b) => (b.votes - a.votes));
    case 'SORT_NEW':
      return postlist.slice().sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));
    default:
      return postdata;
  }
};
