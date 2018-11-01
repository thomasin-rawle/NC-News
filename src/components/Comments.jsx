import React, { Component } from 'react';
import * as api from '../api'
import './Comments.css'
import ProfilePic from './ProfilePic';
import Like from './Like'

class Comments extends Component {
    state = {
        comments: [],
    }
    render() {
        
        return (
        <div>
            {this.state.comments.map(comment => {
                return (
                <div key={comment._id} className="comment">
                    <div className="top-bar">
                        <ProfilePic user={comment.created_by}/>
                        <p>{comment.created_by.username}</p>
                    </div>
                    <p>{comment.body}</p>
                    <div className="art-interactions">
                    <Like likeCount={comment.votes}  target_id={comment._id} type={'comment'} />
                    {comment.created_by._id === this.props.articleAuthor._id && 
                    <button className="delete-comment" onClick={this.handleClick}>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>}
                    </div>
                </div>
                );
            })}
        </div>
    );
  }
  componentDidMount(){
    this.fetchComments(this.props.article_id);
  }
  componentDidUpdate(){
      
  }
  fetchComments = (id) => {
    api
      .getComments(id)
      .then(newComments => {
        this.setState({
          comments: newComments,

        });
      });
  };
}

export default Comments;
