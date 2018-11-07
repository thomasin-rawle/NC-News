import React, { Component } from 'react';
import * as api from '../api';
import './Comments.css';
import ProfilePic from './ProfilePic';
import Like from './Like';
import PostComment from './PostComment';
import { Link } from '@reach/router';

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const {user} = this.props
    const {comments} = this.state
    return (
      <div>
        <PostComment user={user} postComment={this.postComment} />
        {comments.map(comment => {
          return (
            <div key={comment._id} className="comment">
            <Link to={`/users/${comment.created_by.username}`}>
              <div className="top-bar">
                <ProfilePic user={comment.created_by} />
                <p>{comment.created_by.username}</p>
              </div>
              </Link>
              <p className="body">{comment.body}</p>
              <div className="art-interactions">
                <Like
                  likeCount={comment.votes}
                  target_id={comment._id}
                  type={'comment'}
                />
                {comment.created_by._id === user._id && (
                  <button
                    className="delete-comment"
                    onClick={() => {
                      this.deleteComment(comment._id);
                    }}
                  >
                    <i className="fa fa-trash-o" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    const {article_id} = this.props
    this.fetchComments(article_id);
  }
  fetchComments = id => {
    api.getComments(id).then(newComments => {
      newComments.sort(function(a,b){
        return new Date(b.created_at) - new Date(a.created_at);
      })
      this.setState({
        comments: newComments
      });
    });
  };
  postComment = (comment) => {
    const {comments} = this.state
    const {user, article_id} = this.props
    const newComment = {body: comment, created_by: user._id}
    api.postComment(newComment, article_id)
    .then(postedComment => {
      this.setState({
        comments: [postedComment, ...comments]
      });
    })
  }
  deleteComment = id => {
    const {comments} = this.state
    const result = window.confirm('Are you sure you want to delete this comment?')
    if (result) {
      api.deleteComment(id).then(() => {
        const newComments = comments.filter(comment => comment._id !== id)        
        this.setState({
          comments: newComments
        });
      });
    }
  };
}

export default Comments;
