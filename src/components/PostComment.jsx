import React, { Component } from 'react';
import ProfilePic from './ProfilePic'
import './PostComment.css'

class PostComment extends Component {
    state = {
        body: '',
        errMsg: ''
    }
    render() {
        return (
            <div className="post-comment-box">
            {this.state.errMsg && <div className='post-error'><i className="fa fa-exclamation-circle" aria-hidden="true"></i>{this.state.errMsg}</div>}
                <form onSubmit={this.handleSubmit}>
                    <ProfilePic user={this.props.user}/>
                    <textarea onChange={this.handleChange} value={this.state.body} id='body' placeholder='Add a comment...' name='body'/>
                    <div className="button-container">
                        <p className="postingAs">Commenting as <strong>{this.props.user.username}</strong></p>
                        <button>Comment</button>
                    </div>
                </form>
            </div>
        );
    }
    handleSubmit = e => {
        e.preventDefault();
        const {body} = this.state;
        if (body.length) {
            this.props.postComment(body)
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
