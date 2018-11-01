import React, { Component } from 'react';
import * as api from '../api';
import './Comments.css';
import ProfilePic from './ProfilePic';
import Like from './Like';
import PostComment from './PostComment';

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <div>
        <PostComment user={this.props.user} postComment={this.postComment} />
        {this.state.comments.map(comment => {
          return (
            <div key={comment._id} className="comment">
              <div className="top-bar">
                <ProfilePic user={comment.created_by} />
                <p>{comment.created_by.username}</p>
              </div>
              <p className="body">{comment.body}</p>
              <div className="art-interactions">
                <Like
                  likeCount={comment.votes}
                  target_id={comment._id}
                  type={'comment'}
                />
                {comment.created_by._id === this.props.articleAuthor._id && (
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
    this.fetchComments(this.props.article_id);
  }
  fetchComments = id => {
    api.getComments(id).then(newComments => {
      this.setState({
        comments: newComments
      });
    });
  };
  postComment = (comment) => {
    const newComment = {body: comment, created_by: this.props.user._id}
    const article_id = this.props.article_id
    api.postComment(newComment, article_id)
    .then(postedComment => {
      this.setState({
        comments: [postedComment, ...this.state.comments]
      });
    });
  }
  deleteComment = id => {
    const result = window.confirm('Are you sure you want to delete this comment?')
    if (result) {
      api.deleteComment(id).then(() => {
        const newComments = this.state.comments.filter(comment => comment._id !== id)        
        this.setState({
          comments: newComments
        });
      });
    }
  };
}

export default Comments;
