import React, { Component } from 'react';
import './ProfilePic.css'

class ProfilePic extends Component {
    state = {
        avatar_url : this.props.user.avatar_url
    }
    render() {
        const {avatar_url} = this.state;
        return (
            <div className="profile-pic">
                 <img src={avatar_url} onError={this.makeDefaultPhoto} alt="avatar"/>
            </div>
        );
    }
    makeDefaultPhoto = () => {
        this.setState({
            avatar_url: '/default.jpg'
        })
    }
}

export default ProfilePic;