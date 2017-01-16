import React from 'react';
import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import styles from './styles.css';


const Post = ({title, author, description, categories, votes, updateVote}) => (

  <Card className={styles.card}>
    <div className={styles.container}>
      <a href="">{title}</a>
      <p>{description}</p>
      <p>{author}</p>
      <div className={styles.wrapper}>
        <FlatButton onClick={updateVote}>Vote {votes}</FlatButton>
        {categories.map((category, i) => (
          <Chip key={i}>{category}</Chip>
        ))}
      </div>
    </div>
  </Card>

);

export default Post;