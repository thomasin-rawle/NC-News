import React, { Component } from 'react';
import ProfilePic from './ProfilePic';
import './PostArticle.css';
import { Row, Col, Grid } from 'react-bootstrap';

class PostArticle extends Component {
  state = {
    title: '',
    body: '',
    topic: '',
    errMsg: ''
  };
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={8} md={6} xsOffset={0} smOffset={2} mdOffset={3}>
            <div className="post-article-box">
              <h3>
                Write an article...{' '}
                <i className="fa fa-pencil" aria-hidden="true" />
              </h3>
              <form onSubmit={this.handleSubmit}>
                <ProfilePic user={this.props.user} />
                <input
                  onChange={this.handleChange}
                  value={this.state.title}
                  id="title"
                  type="text"
                  placeholder="Post Title"
                  name="title"
                />
                <textarea
                  onChange={this.handleChange}
                  value={this.state.body}
                  id="body"
                  placeholder="Write something..."
                  name="body"
                />
                <div className="form-components">
                  <div className="select-container">
                    {(this.props.topic && (
                      <select disabled id="topic" value={this.state.topic}>
                        <option value={this.props.topic}>
                          {this.props.topic}
                        </option>
                      </select>
                    )) || (
                      <select
                        id="topic"
                        onChange={this.handleChange}
                        value={this.state.topic}
                      >
                        <option value="default">Choose One </option>
                        {this.props.topics.map(topic => {
                          return (
                            <option key={topic._id} value={topic.slug}>
                              {topic.title}
                            </option>
                          );
                        })}
                      </select>
                    )}
                  </div>
                  <button>Post Article</button>
                 {this.state.errMsg && <div className={'post-error'}><i className="fa fa-exclamation-circle" aria-hidden="true"></i> {this.state.errMsg}</div>}
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
  handleSubmit = e => {
    e.preventDefault();
    const { title, body, topic } = this.state;
    if (title.length && body.length && topic.length && topic !== 'default') {
      this.props.postArticle({ title, body }, topic);
      this.setState({
        title: '',
        body: '',
        topic: '',
        errMsg: ''
      });
    } else {
      if (!title.length) {
        this.setState({
          errMsg: 'Please enter a title for this post'
        });
      }
      else if (!body.length) {
        this.setState({
          errMsg: 'Please enter some content for this post'
        });
      } else {
        this.setState({
          errMsg: 'Please select a topic for this post'
        });
      }
    }
  };
  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };
}

export default PostArticle;
