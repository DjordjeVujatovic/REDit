import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Post';
import styles from './styles.css';
import SortTab from '../../components/SortTab';
import { voteUp, sortPopular, sortNew, fetchPosts } from '../../reducers/reducers';

class PostList extends Component {

  // redux connection //

  componentWillMount() {
    this.props.fetchPosts(); //eslint-disable-line
  }

  renderPosts() {
    const posts = this.props.posts;
    const filter = this.props.filter;

    return posts
    .filter(post => post.category.includes(filter))
    .map(post => (
      <Post
        key={post.postId}
        title={post.title}
        description={post.description}
        categories={post.category}
        votes={post.votes}
        id={post.postId}
        voteUp={this.props.updateVote}
        tags={post.tags}
      />
    ));
  }

  render() {
    return (

      <div className={styles.sortContainer}>
        <SortTab sortPopular={this.props.sortPop} sortNewest={this.props.sortNew} />
        { this.renderPosts() }
      </div>
    );
  }
}

PostList.propTypes = {
  updateVote: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired, //eslint-disable-line
  sortPop: PropTypes.func.isRequired,
  sortNew: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  posts: state.postList,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  updateVote: (id) => dispatch(voteUp(id)),
  sortPop: () => dispatch(sortPopular()),
  sortNew: () => dispatch(sortNew()),
  fetchPosts: () => {
    dispatch(fetchPosts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
