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
                <section>
                    <ProfilePic user={user} />
                    <p>Name: <span className="primary-color">{user.name}</span></p>
                    <p>Username: <span className="primary-color">{user.username}</span></p>
                    
                    <button onClick={logOut}>Log Out</button>
                </section>
                <section>
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
                        {this.state.userArticles.map(article => {
                            return(
                                <div key={article._id}>
                                <h3>{article.title}</h3>
                                <p>{formatDate(article.created_at)}</p>
                                </div>
                            )
                        })}
                    <h2>Comment History</h2>
                        {this.state.userComments.map(comment => {
                            return(
                                <div key={comment._id}>
                                <h4>{comment.belongs_to.title}</h4>
                                <p>{formatDate(comment.created_at)}</p>
                                </div>
                            )
                        })}
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
        const {user} = this.props
        api.getUserArticles(user._id)
        .then(articles => {
            this.setState({
                userArticles : articles.sort(function(a,b){
                        return new Date(b.created_at) - new Date(a.created_at);
                      })
            })
        })
    }
    fetchUserComments = () => {
        const {user} = this.props
        api.getUserComments(user._id)
        .then(comments => {
            this.setState({
                userComments : comments.sort(function(a,b){
                    return new Date(b.created_at) - new Date(a.created_at);
                  })
            })
        })
    }
}

export default UserProfile;

// const newArr = array.sort(function(a,b){
//     return new Date(b.date) - new Date(a.date);
//   });
  