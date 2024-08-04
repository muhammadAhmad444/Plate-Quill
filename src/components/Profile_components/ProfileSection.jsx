import React from 'react';
import './ProfileSection.css';

const ProfileSection = () => {
  // Static values for the profile section
  const name = 'Rhea';
  const profilePicture = 'public/profile_dp.png'; // Replace with the actual path to your profile picture
  const rating = 4;
  const socialLinks = {
    instagram: 'https://instagram.com/johndoe',
    facebook: 'https://facebook.com/johndoe',
    pinterest: 'https://pinterest.com/johndoe'
  };
  const bio = "Hi! i’m Rhea, a food blogger extraordinaire, captures the essence of global flavors through tantalizing visuals and vivid storytelling. From city markets to hidden gems, Alex's blog is a culinary adventure that invites readers to indulge in the art of gastronomy. Savor the world one delicious post at a time!";
  const stats = {
    likes: 1234,
    followers: 5678,
    reviews: 90
  };

  return (
    <div className="profile-section">
      <div className="profile-header">
        <img src={profilePicture} alt={name} className="profile-picture" />
        <div className="profile-info">
            <div className='profile-info-basic'>
          <h1>{name}</h1>
          <div className="stars">
            {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
          </div>
          <div className="social-icons">
            <a href={socialLinks.instagram}>
                <img src="public/Instagram-profile.png" alt="instagram" />
            </a>
            <a href={socialLinks.facebook}>
                <img src="public/Facebook-profile.png" alt="instagram" />
            </a>
            <a href={socialLinks.pinterest}>
                <img src="public/pinterest-profile.png" alt="instagram" />
            </a>
          </div>
          </div>
          <button className="primary_button">Edit Profile</button>
        </div>
      </div>
      <div className="profile-bio">
        <p>{bio}</p>
      </div>
      <div className="profile-stats">
        <div className="stat">
          <span className="stat-number">{stats.likes}</span>
          <span className="stat-label">Likes</span>
        </div>
        <div className="stat">
          <span className="stat-number">{stats.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat">
          <span className="stat-number">{stats.reviews}</span>
          <span className="stat-label">Reviews</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
