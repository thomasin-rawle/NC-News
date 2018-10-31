import React, { Component } from 'react';
import './Articles.css'

class Like extends Component {
    state ={
        liked: false
    }
    render() {
        return (
            <div className="likeDiv">
               <div className={this.state.liked? 'heart is_animating' : 'heart'} onClick={this.handleClick}></div>
               {this.props.likeCount} Likes
            </div>
        );
    }
    handleClick = () => {
        this.setState(prevState => {
           return {liked: !prevState.liked}
        })
    }
}

export default Like;