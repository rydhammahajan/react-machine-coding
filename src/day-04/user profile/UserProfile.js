import React, { Component, useState } from 'react';
import "./UserProfile.css"

const user = {
  name: 'Jane Doe',
  bio: 'Frontend developer who loves React and coffee ☕️',
  image: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg'
};

const UserProfile = () => {

  const [hidden , setHidden] = useState(true) ; 
  return (

    <div className="user-profile">
      <img src={user.image} className="profile-img" />
      <h2>{user.name}</h2>
      <button onClick={(e) => {
        const temp = hidden; 
        setHidden(!temp);
      }}>{hidden ? "Show" : "Hide"} Bio</button>
      {hidden ? <></> : <div className="user-bio">{user.bio}</div>}
    </div>
  );
}

export default UserProfile;
