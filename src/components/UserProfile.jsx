import React from 'react';
import Back from './Back'
import ProfilePic from './ProfilePic';
const UserProfile = ({user, logOut}) => {
    const {name, username} = user
    console.log(logOut)
    return (
        <div>
            <Back  />
            <h1>User Profile</h1>
            <div>
                <ProfilePic user={user} />
                <p>name: {name}</p>
                <p>username: {username}</p>
            </div>
            <button onClick={logOut}>Log Out</button>
            
        </div>
    );
};

export default UserProfile;