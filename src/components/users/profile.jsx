import React, { useState, useEffect } from 'react';
import FetchCommentsByUser from '../comments/fetchCommentsByUser';
import FetchReviewsByUser from '../reviews/fetchReviewsByUser';
import './Profile.css';  // Import the CSS for styling

export default function Profile() {
  const userId = Number(localStorage.getItem('userId'));

  const [isEditMode, setIsEditMode] = useState(false);  // To toggle between edit and save mode

  const [profileDetails, setProfileDetails] = useState({
    profilePicture: localStorage.getItem('profilePicture') || '',
    status: '',
    gender: '',
    pronouns: '',
    bio: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileDetails({
      ...profileDetails,
      [name]: value
    });
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfileDetails({
        ...profileDetails,
        profilePicture: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSaveEditToggle = () => {
    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    const storedProfilePicture = localStorage.getItem('profilePicture');
    if (storedProfilePicture) {
      setProfileDetails({
        ...profileDetails,
        profilePicture: storedProfilePicture
      });
    }
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-picture">
        <label htmlFor="profilePictureInput">
          <div className="circle">
            {profileDetails.profilePicture ? (
              <img
                src={profileDetails.profilePicture}
                alt="Profile"
                className="profile-image"
              />
            ) : (
              <div className="profile-image-placeholder">Add Photo</div>
            )}
          </div>
          {isEditMode && (
          <input
            id="profilePictureInput"
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            disabled={!isEditMode}
           
          />
          )}
        </label>
      </div>
      <div className="profile-details">
        <form>
          <label>
            Bio:
            <textarea
              name="bio"
              value={profileDetails.bio}
              onChange={handleInputChange}
              disabled={!isEditMode}
              style={{ display: isEditMode ? 'block' : 'none' }}
              
            />
          </label>
        </form>
      </div>
      <button onClick={handleSaveEditToggle}>
        {isEditMode ? 'Save' : 'Edit'}
      </button>

      {/* Display user reviews and comments */}
      <FetchReviewsByUser userId={userId} />
      <FetchCommentsByUser userId={userId} />
    </div>
  );
}
