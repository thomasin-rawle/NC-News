import React, { Component } from 'react';
import Articles from './Articles';
import * as api from '../api';
import './Topics.css';

class Topics extends Component {
    state = {
        articles: []
    }
    render() {
        return (
            <div>
                <h1 className="topic-title">{this.props.topic_slug} Articles</h1>
                <Articles articles={this.state.articles} />
            </div>
        );
    }
    componentDidMount(){
        console.log('...topics mounted')
        this.fetchArticlesByTopic()
    }
    componentDidUpdate(prevProps){
        console.log('...topics updated')
        if (prevProps.topic_slug !== this.props.topic_slug) {
            this.fetchArticlesByTopic()
        }
    }
    fetchArticlesByTopic = () => {
        const selectedTopic = this.props.topic_slug;
        api.getArticlesByTopic(selectedTopic)
        .then(newArticles => {
          this.setState({
            articles: newArticles
          })
        })
    }
}

export default Topics;