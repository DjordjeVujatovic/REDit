import React from 'react';
import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import styles from './styles.css';


const Post = ({ title, description, categories, votes, voteUp, id, tags }) => (

  <Card className={styles.card}>
    <div className={styles.container}>
      <a href="">{title}</a>
      <p>{description}</p>
      <div className={styles.wrapper}>
        <FlatButton onClick={() => voteUp(id)}>Vote {votes}</FlatButton>
        {tags.map((tag) => (
          <Chip>{tag}</Chip>
        ))}
      </div>
    </div>
  </Card>
);


Post.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  voteUp: React.PropTypes.func.isRequired,
  votes: React.PropTypes.number.isRequired,
  categories: React.PropTypes.array.isRequired, //eslint-disable-line
  id: React.PropTypes.string.isRequired,
};

export default Post;
