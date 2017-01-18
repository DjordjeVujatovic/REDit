export const postdata = [{
  id: '0',
  author: 'Mackenzie',
  votes: 0,
  categories: [
    'React',
  ],
  title: 'React!!!!',
  description: 'Some React resource',
  link: '//github.com/react',
}, {
  id: '1',
  author: 'Shawn',
  votes: 5,
  categories: [
    'React',
  ],
  title: 'React ?',
  description: 'Some React resource',
  link: '//github.com/react',
}];

const VOTE_UP = 'VOTE_UP';

export const voteUp = id => ({
  type: VOTE_UP,
  payload: { id },
});

const SORT_POP = 'SORT_POP';

export const sortPopular = () => ({
  type: SORT_POP,
});

const SORT_NEW = 'SORT_NEW';

export const sortNew = () => ({
  type: SORT_NEW,
});


export const postReducer = (postlist = postdata, action) => {
  switch (action.type) {
    case VOTE_UP:
      return postlist.map((post) => {
        if (post.id !== action.payload.id) return post;

        return { ...post, votes: post.votes + 1 };
      });
    case SORT_POP:
      return postlist.slice().sort((a, b) => (b.votes - a.votes));
    case SORT_NEW:
      return postlist.slice().sort((a, b)=> parseInt(a.id, 10) - parseInt(b.id, 10));
    default:
      return postdata;
  }
};
