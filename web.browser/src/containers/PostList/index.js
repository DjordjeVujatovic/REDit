import React, { Component } from 'react';
import Post from '../../components/Post';
import { data } from '../../mock-data';
import styles from './styles.css';
import SortTab from '../../components/SortTab';

class PostList extends Component {
    constructor() {
        super();
        this.state = {
            posts: data.posts,
            orderBy: 'newest'
        }
    }

    updateVote(item) {
        const upVote = this.state.posts.map((post) => {
            if (post.id === item.id) {
                post.votes = post.votes + 1
            }
        })
        this.setState({ votes: upVote })
    };

    sortPopular(){
        const popular = this.state.posts.sort((a, b) => {
            return(
            b.votes - a.votes
            )
        })
        this.setState({posts: popular, orderBy: 'popular'})
    };

    sortNewest(){
        const newest = this.state.posts.sort((a, b)=> {
            return(
                parseInt(a.id) - parseInt(b.id)
            )
        })
        this.setState({posts: newest, orderBy: 'newest'})
    }

        render(){

            return (
                <div className={styles.postsContainer}>
                    <SortTab sortPopular={this.sortPopular.bind(this)} sortNewest={this.sortNewest.bind(this)}/>
                    {data.posts.map((post) => (
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            description={post.description}
                            categories={post.categories}
                            votes={post.votes}
                            updateVote={this.updateVote.bind(this, post)}
                            
                            />
                    ))}
                </div>
            )
        }
    }

    export default PostList;