import React, { Component } from 'react';
import * as api from '../api';

class Article extends Component {
  state = {
    article: {}
  };
  render() {
    if (this.state.loading) return <h1>...loading</h1>;
    return (
      <div>
        <h1>Article</h1>
        <p>{this.state.article.title}</p>
        <p>{this.state.article.body}</p>
        {this.props.children}
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
          article: newArticle
        });
      });
  };
}

export default Article;
