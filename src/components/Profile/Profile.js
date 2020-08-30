import React from 'react';
import './Profile.css';

const Profile = ({ name, company, bio, location, linkedin, repos }) => {
  return (
    <div className='Container'>
      <div className='Container-items'>
        <h2> {name}</h2>
        <p>
          <b>Company: </b> {company}
        </p>
        <p>
          <b>Bio:</b> {bio}
        </p>
        <p>
          {' '}
          <b>Address:</b> {location}
        </p>
        <p>
          {' '}
          <b>LinkedIn:</b> {linkedin}
        </p>
        <p>
          <b>Your Repos:</b>
          {repos}
        </p>
      </div>
    </div>
  );
};

export default Profile;
