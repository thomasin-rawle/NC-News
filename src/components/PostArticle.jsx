import React, { Component } from 'react';

class PostArticle extends Component {
    state = {
        title: '',
        body: '',
        topic:''
    }
    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} id='title' type="text" placeholder='Post Title' name="title"/>
                    <textarea onChange={this.handleChange} id='body' placeholder='Write something...' name='body'/>
                    {(this.props.topic && <input readOnly id='topic' type="text" value={this.props.topic} name="topic"/>) || 
                    <select id='topic' onChange={this.handleChange}>
                        <option value="default">-- Topic --</option>
                        <option value="coding">Coding</option>
                        <option value="cooking">Cooking</option>
                        <option value="football">Football</option>
                    </select>}
                    <button >Post Article</button>
                </form>
            </div>
        );
    }
    handleSubmit = e => {
        e.preventDefault();
        const {title, body, topic} = this.state
        return this.props.postArticle({title, body}, topic)
        
    }
    handleChange = e => {
        const {id, value} = e.target;
        this.setState({
            [id]:value
        })
    }
}

export default PostArticle;