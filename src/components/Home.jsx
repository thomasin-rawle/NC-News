import React, { Component } from 'react';
import Articles from './Articles'
import * as api from '../api';

class Home extends Component {

    state = {
        articles: []
    }
    render() {
        console.log(this.state.articles)
        return (
            
            <div>
                <h1>Home Page</h1>
                <Articles articles={this.state.articles} />
            </div>
        );
    }
    componentDidMount(){
        console.log('...topics mounted')
        this.fetchAllArticles()
    }
    componentDidUpdate(prevProps){
        console.log('...topics updated')
        if (prevProps.topic_slug !== this.props.topic_slug) {
            this.fetchAllArticles()
        }
    }
    fetchAllArticles = () => {
        api.getAllArticles()
        .then(newArticles => {
          this.setState({
            articles: newArticles
          })
        })
    }
}

export default Home;