import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../api';
import './Articles.css';
import PostArticle from './PostArticle';
import formatDate from './utils/formatDate';
import ProfilePic from './ProfilePic';
import Like from './Like';

class Articles extends Component {
  state = {
    articles: [],
    loading: true
  };
  render() {
    const selectedTopic = this.props.topic_slug;
    if (this.state.loading) return <h1>...loading</h1>;
    return (
      <div className="articles">
        <h1 className="topic-title">
          {selectedTopic && `${selectedTopic} Articles`}
        </h1>
        <PostArticle
          topic={this.props.topic_slug}
          postArticle={this.postArticle}
          user={this.props.user}
        />
        {this.state.articles.map(article => {
          return (
            <article key={article._id} className="article">
              <div className="article-info">
                <ProfilePic user={article.created_by} />
                <p>Posted by {article.created_by.name}</p>
                <p>|</p>
                <p>{formatDate(article.created_at)}</p>
                <p className="topic">
                  nc/
                  {article.belongs_to}
                </p>
              </div>

              <Link to={`/article/${article._id}`}>
                <h2>{article.title}</h2>
                <div className="body">{article.body}</div>
              </Link>
              <div className="art-interactions">
                <Link key={article._id} to={`/article/${article._id}`}>
                  <span className="comments">
                  {`${article.comment_count} ${(article.comment_count === 1 && `Comment`) || `Comments`}`}
                  </span>
                </Link>
                <Like likeCount={article.votes} target_id={article._id} type={'article'} />
              </div>
            </article>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    console.log('...Articles mounted');
    this.fetchArticles();
  }
  componentDidUpdate(prevProps) {
    console.log('...Articles updated');
    if (prevProps.topic_slug !== this.props.topic_slug) {
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    const selectedTopic = this.props.topic_slug;
    api.getArticles(selectedTopic).then(newArticles => {
      this.setState({
        articles: newArticles,
        loading: false
      });
    });
  };
  postArticle = (article, topic) => {
    const newArticle = { ...article, created_by: this.props.user._id };
    const selectedTopic = topic ? topic : this.props.topic_slug;
    api.postArticle(newArticle, selectedTopic).then(postedArticle => {
      this.setState({
        articles: [postedArticle, ...this.state.articles]
      });
    });
  };
}

export default Articles;
