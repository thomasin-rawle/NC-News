import React from 'react';
import './ProfilePic.css'

const ProfilePic = (props) => {
        const {avatar_url} = props.user
        return (
            <div className="profile-pic">
                 <img src={avatar_url} onError={(e) => e.target.src = '/default.jpg'} alt="avatar" />
            </div>
        );
};

export default ProfilePic;