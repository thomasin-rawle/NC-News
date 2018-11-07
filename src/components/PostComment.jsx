import React, { Component } from 'react';
import ProfilePic from './ProfilePic'
import './PostComment.css'

class PostComment extends Component {
    state = {
        body: '',
        errMsg: ''
    }
    render() {
        const {user} = this.props
        const {errMsg, body} = this.state
        return (
            <div className="post-comment-box">
            {errMsg && <div className='post-error'><i className="fa fa-exclamation-circle" aria-hidden="true"></i>{errMsg}</div>}
                <form onSubmit={this.handleSubmit}>
                    <ProfilePic user={user}/>
                    <textarea onChange={this.handleChange} value={body} id='body' placeholder='Add a comment...' name='body'/>
                    <div className="button-container">
                        <p className="postingAs">Commenting as <strong>{user.username}</strong></p>
                        <button>Comment</button>
                    </div>
                </form>
            </div>
        );
    }
    handleSubmit = e => {
        e.preventDefault();
        const {body} = this.state;
        const {postComment} = this.props;
        if (body.length) {
            postComment(body)
            this.setState({
                body: '',
                errMsg: ''
            })
        }
        else {
            this.setState({
                errMsg: 'Please enter a comment'
            })
        }
    }
    handleChange = e => {
        const {id, value} = e.target;
        this.setState({
            [id]:value,
            errMsg: ''
        })
    }
}

export default PostComment;
