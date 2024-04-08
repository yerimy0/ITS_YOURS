import React, { useState } from 'react';
import { ProfileWrapper, ProfileImage, IconWrapper, HiddenFileInput, IconImage } from './UsersStyles';

const ProfileImageUploader = ({ onImageSelected }) => {
  const [preview, setPreview] = useState('/logoCharacter.png');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onImageSelected(file);
    }
  };

  return (
    <ProfileWrapper>
      <ProfileImage src={preview} alt="Profile" />
      <HiddenFileInput
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        id="profile-image-upload"
      />
      <IconWrapper htmlFor="profile-image-upload">
        <IconImage src="/photo.svg" alt="Upload" />
      </IconWrapper>
    </ProfileWrapper>
  );
};

export default ProfileImageUploader;
