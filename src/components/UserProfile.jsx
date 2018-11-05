import React, { Component } from 'react';
import Back from './Back';
import ProfilePic from './ProfilePic';
import * as api from '../api';
import './UserProfile.css';
import formatDate from './utils/formatDate';
import { Row, Col, Grid } from 'react-bootstrap';

class UserProfile extends Component {
  state = {
    userInfo: {},
    userArticles: [],
    userComments: [],
    loading: true
  };
  render() {
    const { currentUser, logOut } = this.props;
    const { userInfo, userArticles, userComments, loading } = this.state;

    if (loading)
      return (
        <div className="loading">
          <i className="fa fa-spinner fa-pulse" aria-hidden="true" />
        </div>
      );
      
    return (
      <Grid>
        <Back />
        <Row className="user-profile">
          <Col xs={12} md={4}>
            <aside className="sidebar">
              <div className="profile">
                <ProfilePic user={userInfo} />
                <p>
                  Name: <span className="primary-color">{userInfo.name}</span>
                </p>
                <p>
                  Username:{' '}
                  <span className="primary-color">{userInfo.username}</span>
                </p>
              </div>
              {currentUser._id === userInfo._id && (
                <div className="">
                  <button onClick={logOut}>Log Out</button>
                </div>
              )}
            </aside>
          </Col>
          <Col xs={12} md={8}>
            <article className="main">
              <div className="count-container ">
                <div className="count">
                  <h1>{userArticles.length}</h1>
                  <p>Articles Posted</p>
                </div>
                <div className="count">
                  <h1>{userComments.length}</h1>
                  <p>Comments Posted</p>
                </div>
              </div>

              <h2>Article History</h2>
              <div className="userArticles__container">
                {userArticles.map(article => {
                  return (
                    <div className="article-container" key={article._id}>
                      <h3 className="article-name">{article.title}</h3>
                      <p className="article-date">
                        {formatDate(article.created_at)}
                      </p>
                    </div>
                  );
                })}
              </div>
              <h2>Comment History</h2>
              <div className="userArticles__container">
                {userComments.map(comment => {
                  return (
                    <div key={comment._id}>
                      <div className="comment-container">
                        <h3 className="comment-article-name">
                          {comment.belongs_to.title}
                        </h3>
                        <p className="comment-date">
                          {formatDate(comment.created_at)}
                        </p>
                      </div>
                      <p className="comment-text">{comment.body}</p>
                    </div>
                  );
                })}
              </div>
            </article>
          </Col>
        </Row>
      </Grid>
    );
  }
  componentDidMount() {
    this.fetchUser();
  }
  componentDidUpdate(prevProps, prevState) {
    const { userInfo } = this.state;
    if (prevState.userInfo !== userInfo) {
      this.fetchUserArticles();
      this.fetchUserComments();
    }
  }
  fetchUser = () => {
    const { username } = this.props;
    api.getUser(username).then(userInfo => {
      this.setState({
        userInfo,
        loading: false
      });
    });
  };
  fetchUserArticles = () => {
    const { userInfo } = this.state;
    api.getUserArticles(userInfo._id).then(articles => {
      articles.sort(function(a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      this.setState({
        userArticles: articles
      });
    });
  };
  fetchUserComments = () => {
    const { userInfo } = this.state;
    api.getUserComments(userInfo._id).then(comments => {
      comments.sort(function(a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      this.setState({
        userComments: comments
      });
    });
  };
}

export default UserProfile;
