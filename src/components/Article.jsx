import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../api';
import './Article.css'
import ProfilePic from './ProfilePic';
import Like from './Like';
import formatDate from './utils/formatDate';
import Comments from './Comments'


class Article extends Component {
  state = {
    article: {},
    loading: true
  };
  render() {
    const {article} = this.state;
    if (this.state.loading) return <h1>...loading</h1>;
    return (
      <div>
      <Link to="/"><button className="back"><i className="fa fa-chevron-left" aria-hidden="true"></i> Back</button></Link>
      <div className="individual-article">
        <article className="article individual">
          <div className="article-info">
                <p className="topic">
                  nc/
                  {article.belongs_to}
                </p>
                <p>|</p>
                <p>{formatDate(article.created_at)}</p>
                
              </div>
              <h1>{article.title}</h1>
          <div className="body">{article.body}</div>
          <div className="art-interactions">
                  <span className="comments">
                  {`${article.comment_count} ${(article.comment_count === 1 && `Comment`) || `Comments`}`}
                  </span>
                <Like likeCount={article.votes} target_id={article._id} type={'article'}/>
          </div>
          
          <Comments user={this.props.user} articleAuthor={article.created_by} article_id={article._id} />
        </article>
        <article className="sidebar">
          <h1>User Profile</h1>
          <p>Posted by {article.created_by.name}</p>
          
          <ProfilePic user={article.created_by} />
        </article>
      </div>
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticle(this.props.id);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.fetchArticle(this.props.id);
    }
  }
  fetchArticle = id => {
    api
      .getArticle(id)
      .then(newArticle => {
        this.setState({
          article: newArticle,
          loading: false
        });
      });
  };
}

export default Article;
