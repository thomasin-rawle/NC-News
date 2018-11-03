import React from 'react';
import './ProfilePic.css'

const ProfilePic = ({user}) => {
        return (
            <div className="profile-pic">
                 <img src={user.avatar_url} onError={(e) => e.target.src = '/default.jpg'} alt="avatar" />
            </div>
        );
};

export default ProfilePic;