import React, { Component } from 'react';
import * as api from '../api'
import Articles from './Article'

class Article extends Component {
    state = {
        article: {},
        
    }
    render() {
        if (this.state.loading) return <h1>...loading</h1>
        return (
            <div>
                <h1>Article</h1>
                {/* <Articles articles={this.state.article} /> */}

            </div>
        );
    }
    componentDidMount(){
        this.fetchArticle(this.props.id)
    }
    componentDidUpdate(prevProps){
        if (prevProps.id !== this.props.id) {
            this.fetchArticle(this.props.id)
        }
    }
    fetchArticle = (id) => {
        api.getArticle(id)
        
        .then(newArticle => {
            console.log(newArticle)
            this.setState({
                article: newArticle,
            })
        })
    }
}

export default Article;