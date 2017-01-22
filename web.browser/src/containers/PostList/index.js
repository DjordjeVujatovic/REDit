import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Post';
import styles from './styles.css';
import SortTab from '../../components/SortTab';
import { voteUp } from '../../reducers/reducers';
import mockData from '../../mock-data';

class PostList extends Component {

  /*updateVote(item) {
     const upVote = this.state.posts.map((post) => {
      if (post.id === item.id) { post.votes = post.votes + 1 }
    });
    this.setState({ votes: upVote })
  }

  sortPopular() {
    const popular = this.state.posts.sort((a, b) => { return (b.votes - a.votes);
    });
    this.setState({ posts: popular, orderBy: 'popular' });
  }

  sortNewest() {
    const newest = this.state.posts.sort((a, b) => { return (parseInt(a.id) - parseInt(b.id));
    });
    this.setState({ posts: newest, orderBy: 'newest' })
  }*/

  // redux connection //


  render() {
    const { posts } = this.props;
    
    return (

      <div className={styles.postsContainer}>

        {posts.map(post => (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            description={post.description}
            categories={post.categories}
            votes={post.votes}
            voteUp={this.props.posts.bind(this)}
          />
        ))}
      </div>
    );
  }
}

PostList.propTypes = {
  increment: PropTypes.func.isRequired,
  vote: PropTypes.object.isRequired, //eslint-disable-line
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  posts: state.postReducer.postlist,
});

const mapDispatchToProps = dispatch => ({
  increment: (id) => {
    dispatch(voteUp(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
