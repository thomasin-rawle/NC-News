import React, { Component } from 'react';
import './ProfilePic.css'

class ProfilePic extends Component {
    state = {
        image_url : this.props.user.avatar_url
    }
    render() {
        return (
            <div className="profile-pic">
                 <img src={this.state.image_url || `/default.jpg`} onError={this.makeDefaultPhoto} alt="avatar"/>
            </div>
        );
    }
    makeDefaultPhoto = () => {
        this.setState({
            image_url: 'default.jpg'
        })
    }
}

export default ProfilePic;