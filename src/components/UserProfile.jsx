import React, { Component } from 'react';
import Back from './Back'
import ProfilePic from './ProfilePic';
import * as api from '../api'
import './UserProfile.css'
import formatDate from './utils/formatDate';


class UserProfile extends Component {
    state = {
        userArticles : [],
        userComments: []
    }
    render() {
        const {user, logOut} = this.props
        return (
            <div>
                <Back  />
                
                <div className="user-profile">
                <section className="sidebar">
                <div className="profile">
                    <ProfilePic user={user} />
                    <p>Name: <span className="primary-color">{user.name}</span></p>
                    <p>Username: <span className="primary-color">{user.username}</span></p>
                    </div>
                    <div>
                    <button onClick={logOut}>Log Out</button>
                    </div>
                </section >
                <section className="main">
                <div className="count-container ">
                        <div className="count">
                            <h1>{this.state.userArticles.length}</h1>
                            <p>Articles Posted</p>
                        </div>
                        <div className="count">
                            <h1>{this.state.userComments.length}</h1>
                            <p>Comments Posted</p>
                        </div>
                    </div>
                    
                        <h2>Article History</h2>
                        <div className="userArticles__container">
                        {this.state.userArticles.map(article => {
                            return(
                                
                                <div className="article-container" key={article._id}>
                                <h3 className="article-name">{article.title}</h3>
                                <p className="article-date">{formatDate(article.created_at)}</p>
                                </div>
                            )
                        })}
                        </div>
                    <h2>Comment History</h2>
                    <div className="userArticles__container">
                        {this.state.userComments.map(comment => {
                            return(
                                <div key={comment._id}>
                                <div className="comment-container">
                                <h3 className="comment-article-name">{comment.belongs_to.title}</h3>
                                <p className="comment-date">{formatDate(comment.created_at)}</p>
                                </div>
                                <p className="comment-text">{comment.body}</p>
                                </div>
                            )
                        })}
                        </div>
                </section>
                   
                    
                </div>
                
                
            </div>
        );
    }
    componentDidMount(){
        this.fetchUserArticles();
        this.fetchUserComments();
    }
    fetchUserArticles = () => {
        const {id} = this.props
        api.getUserArticles(id)
        .then(articles => {
            articles.sort(function(a,b){
                return new Date(b.created_at) - new Date(a.created_at);
              })
            this.setState({
                userArticles : articles
            })
        })
    }
    fetchUserComments = () => {
        const {user} = this.props
        api.getUserComments(user._id)
        .then(comments => {
            comments.sort(function(a,b){
                return new Date(b.created_at) - new Date(a.created_at);
              })
            this.setState({
                userComments : comments
            })
        })
    }
}

export default UserProfile;

// const newArr = array.sort(function(a,b){
//     return new Date(b.date) - new Date(a.date);
//   });
  