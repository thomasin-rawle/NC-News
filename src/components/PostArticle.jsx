import React, { Component } from 'react';
import ProfilePic from './ProfilePic'
import './PostArticle.css'

class PostArticle extends Component {
    state = {
        title: '',
        body: '',
        topic: ''
    }
    render() {
       
        return (
            <div className="post-article-box__container">
            <div className="post-article-box">
            <h3>Write an article... <i className="fa fa-pencil" aria-hidden="true"></i></h3>
                <form onSubmit={this.handleSubmit}>
                    <ProfilePic user={this.props.user}/>
                    <input onChange={this.handleChange} value={this.state.title} id='title' type="text" placeholder='Post Title' name="title"/>
                    <textarea onChange={this.handleChange} value={this.state.body} id='body' placeholder='Write something...' name='body'/>
                    <div className="form-components">
                        <div className= "select-container">
                            {(this.props.topic &&
                            <select disabled id='topic' value={this.state.topic}>
                            <option value={this.props.topic}>{this.props.topic}</option>
                            </select>) || 
                            <select id='topic' onChange={this.handleChange} value={this.state.topic} >
                             <option value="default">Choose One </option>
                               {this.props.topics.map(topic => {
                                return (
                                    <option key={topic._id} value={topic.slug}>
                                    {topic.title}
                                    </option>
                                );
                            })}
                            </select>}
                        </div>
                        <button>Post Article</button>
                    </div>
                </form>
            </div>
            </div>
        );
    }
    handleSubmit = e => {
        e.preventDefault();
        const {title, body, topic} = this.state;
        if (title.length > 0 && body.length > 0  && topic !== 'default') {
            this.props.postArticle({title, body}, topic)
            this.setState({
                title: '',
                body: '',
                topic: ''
            })
        }
        else {
            console.log('ERROR, complete all fields')
        }
    }
    handleChange = e => {
        const {id, value} = e.target;
        //const currentTopic = this.props.topic ? this.props.topic : value
        this.setState({
            [id]:value,
           
        })
    }
}

export default PostArticle;
