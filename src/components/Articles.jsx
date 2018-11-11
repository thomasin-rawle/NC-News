import React, { Component } from 'react';
import { Link, navigate } from '@reach/router';
import * as api from '../api';
import './Articles.css';
import PostArticle from './PostArticle';
import formatDate from './utils/formatDate';
import ProfilePic from './ProfilePic';
import Like from './Like';
import { Row, Col, Grid } from 'react-bootstrap';

class Articles extends Component {
  state = {
    articles: [],
    loading: true
  };
  render() {
    const {topic_slug, topics, user} = this.props
    const {articles, loading} = this.state
    if (loading)
      return (
        <div className="loading">
          <i className="fa fa-spinner fa-pulse" aria-hidden="true" />
        </div>
      );
    return (
      <div className="articles">
        <h1 className="topic-title">
          {topic_slug && `${topic_slug} Articles`}
        </h1>
        <PostArticle
          topics={topics}
          topic={topic_slug}
          postArticle={this.postArticle}
          user={user}
        />
        <Grid>
          {articles.map(article => {
            return (
              <Row key={article._id}>
                <Col xs={12} md={8} xsOffset={0} mdOffset={2}>
                  <article className="article">
                    <div className="article-info">
                      <ProfilePic user={article.created_by} />
                      <p className="topic">
                        nc/
                        {article.belongs_to}
                      </p>
                      <p className="name">
                        Posted by {article.created_by.name}
                      </p>
                      <p>|</p>
                      <p>{formatDate(article.created_at)}</p>
                    </div>

                    <Link to={`/article/${article._id}`}>
                      <h2>{article.title}</h2>
                      <div className="body">
                        {article.body
                          .split(' ')
                          .slice(0, 60)
                          .join(' ')}
                          {article.body.split(' ').length > 60 && 
                          <i className="fa fa-ellipsis-h ellipsis" aria-hidden="true"></i>}
                      </div>
                      {article.body.split(' ').length > 60 && (
                        <div className="see-more">
                          <button>...Read more</button>
                        </div>
                      )}
                    </Link>
                    <div className="art-interactions">
                      <Link key={article._id} to={`/article/${article._id}`}>
                        <span className="comments">
                          {`${
                            article.comment_count
                          } ${(article.comment_count === 1 && `Comment`) ||
                            `Comments`}`}
                        </span>
                      </Link>
                      <Like
                        likeCount={article.votes}
                        target_id={article._id}
                        type={'article'}
                      />
                    </div>
                  </article>
                </Col>
              </Row>
            );
          })}
        </Grid>
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps) {
    const {topic_slug} = this.props;
    if (prevProps.topic_slug !== topic_slug) {
      this.fetchArticles();
    }
  }
  fetchArticles = () => {
    const {topic_slug} = this.props;
    api
      .getArticles(topic_slug)
      .then(newArticles => {
        newArticles.sort(function(a, b) {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        this.setState({
          articles: newArticles,
          loading: false
        });
      })
      .catch(err => {
        navigate('/error', {
          replace: true,
           state: {
            errCode: err.response.status,
            errMsg: err.response.data.msg
          }
        });
      });
  };
  postArticle = (article, topic) => {
    const {articles} = this.state
    const {user} = this.props
    const newArticle = { ...article, created_by: user._id };
    api.postArticle(newArticle, topic).then(postedArticle => {
      this.setState({
        articles: [postedArticle, ...articles]
      });
    })
  };
}

export default Articles;
