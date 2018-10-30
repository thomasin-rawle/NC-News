import React, { Component } from 'react';
import Articles from './Articles';
import * as api from '../api';

class Topics extends Component {
    state = {
        articles: []
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Topics</h1>
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
            console.log(newArticles)
          this.setState({
            articles: newArticles
          })
        })
    }
}

export default Topics;