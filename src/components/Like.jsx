import React, { Component } from 'react';
import './Articles.css'
import * as api from '../api'

class Like extends Component {
    state ={
        isliked: false,
        voteChange: 0
    }
    render() {
        return (
            <div className="likeDiv">
               <div className={this.state.isliked? 'heart is_animating' : 'heart'} onClick={this.handleClick}></div>
               {this.props.likeCount + this.state.voteChange} Likes
            </div>
        );
    }
    handleClick = () => {
        const voteChange = (!this.state.isliked) ? 1 : 0;
        const direction = voteChange === 1 ? 'up' : 'down'
        this.setState(prevState => {
           return {
               isliked: !prevState.isliked,
               voteChange
            }
        })
        api.updateLikeCount(this.props.target_id, direction, this.props.type)
    }
}

export default Like;