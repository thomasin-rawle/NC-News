import React, { Component } from 'react';
import './Articles.css'
import * as api from '../api'

class Like extends Component {
    state ={
        isliked: false,
        voteChange: 0
    }
    render() {
        const {likeCount} = this.props
        const {isliked, voteChange} = this.state
        const totalLikes = likeCount + voteChange
        return (
            <div className="likeDiv">
               <div className={isliked? 'heart is_animating' : 'heart'} onClick={this.handleClick}></div>
               {`${totalLikes} ${(totalLikes === 1 && `Like`) || `Likes`}`}
                    
            </div>
        );
    }
    handleClick = () => {
        const {isliked} = this.state
        const {target_id, type} = this.props
        const voteChange = (!isliked) ? 1 : 0;
        const direction = voteChange === 1 ? 'up' : 'down'
        this.setState(prevState => {
           return {
               isliked: !prevState.isliked,
               voteChange
            }
        })
        api.updateLikeCount(target_id, direction, type)
    }
}

export default Like;