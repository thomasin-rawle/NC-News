import React, { Component } from 'react';
import * as api from '../api';
import './Article.css';
import ProfilePic from './ProfilePic';
import Like from './Like';
import formatDate from './utils/formatDate';
import Comments from './Comments';
import Back from './Back';
import { navigate } from '@reach/router';
import { Row, Col, Grid } from 'react-bootstrap';

class Article extends Component {
  state = {
    article: {},
    loading: true
  };
  render() {
    const { article } = this.state;
    if (this.state.loading)
      return (
        <div className="loading">
          <i className="fa fa-spinner fa-pulse" aria-hidden="true" />
        </div>
      );
    return (
      <div>
        <Grid>
          <Back />
          <Row className="individual-article">
          <Col md={4} mdPush={8}>
              <aside>
                <div className="profile">
                  <ProfilePic user={article.created_by} />
                  <p>Posted by</p>
                  <p>
                    <strong>
                      <span className="primary-color">
                        {article.created_by.username}
                      </span>
                    </strong>
                  </p>
                </div>
              </aside>
            </Col>
            <Col md={8} mdPull={4}>
              <article className="">
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
                    {`${article.comment_count} ${(article.comment_count === 1 &&
                      `Comment`) ||
                      `Comments`}`}
                  </span>
                  <Like
                    likeCount={article.votes}
                    target_id={article._id}
                    type={'article'}
                  />
                </div>

                <Comments
                  user={this.props.user}
                  articleAuthor={article.created_by}
                  article_id={article._id}
                />
              </article>
            </Col>
           
          </Row>
        </Grid>
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
}

export default Article;
