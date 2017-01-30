import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Post from '../../components/Post';
import styles from './styles.css';
import SortTab from '../../components/SortTab';
import { voteUp, sortPopular, sortNew, fetchPosts } from '../../reducers/reducers';

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

  componentWillMount() {
    this.props.fetchPosts(); //eslint-disable-line
  }

  renderPosts() {
    const posts = this.props.posts;
    return posts.map(post => (
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        description={post.description}
        categories={post.categories}
        votes={post.votes}
        id={post.id}
        voteUp={this.props.updateVote}
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
};

const mapStateToProps = state => ({
  posts: state.postList,
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
