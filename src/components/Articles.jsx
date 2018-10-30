import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../api';
import './Articles.css';

class Articles extends Component {
    state = {
        articles: [],
        loading: true
    }
    render() {
        const selectedTopic = this.props.topic_slug;
        if (this.state.loading) return <h1>...loading</h1>
        return (
            <div>
                <h1 className="topic-title">{(selectedTopic && `${selectedTopic} Articles`) || `All Articles`}</h1>
                {this.state.articles.map(article => {
                  return (
                    <Link key={article._id} to={`/article/${article._id}`}>
                    <article className='article' >
                            <p>{article.belongs_to}</p>
                            <p>{article.created_by.name}</p>
                            <p>{article.created_at}</p>
                            <h2>{article.title}</h2>
                            <p>{article.body}</p>
                            <p>{article.comment_count}</p>
                            <p>{article.votes}</p>
                        </article>
                    </Link>
                  )
                })}
            </div>
        );
    }
    componentDidMount(){
        console.log('...Articles mounted')
        this.fetchArticles()
    }
    componentDidUpdate(prevProps){
        console.log('...Articles updated')
        if (prevProps.topic_slug !== this.props.topic_slug) {
            this.fetchArticles()
        }
    }
    fetchArticles = () => {
        const selectedTopic = this.props.topic_slug;
        api.getArticles(selectedTopic)
        .then(newArticles => {
          this.setState({
            articles: newArticles,
            loading: false
          })
        })
    }
}

export default Articles;