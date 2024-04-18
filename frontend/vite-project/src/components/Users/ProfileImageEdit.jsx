import React, { useState } from 'react';
import {
	ProfileWrapper,
	ProfileImage,
	IconWrapper,
	HiddenFileInput,
	IconImage,
} from './UsersStyles';

function ProfileImageUploader({ onImageSelected, initialPreview }) {
	const [preview, setPreview] = useState(initialPreview || '/defaultProfileImage.png');

	const handleImageChange = event => {
		const file = event.target.files[0];
		if (file) {
			setPreview(URL.createObjectURL(file));
			onImageSelected(file);
		}
	};

	return (
		<ProfileWrapper>
			<div className="profile_wrap" style={{ marginTop: '30px' }}>
				<ProfileImage src={preview} alt={preview ? '' : '기본 프로필 이미지'} />
				<form
					className="form-box"
					action="/api/members/me"
					method="PUT"
					enctype="multipart/form-data"
				>
					<HiddenFileInput
						type="file"
						name="profilePic"
						accept="image/*"
						onChange={handleImageChange}
						id="profile-image-upload"
					/>
					<IconWrapper htmlFor="profile-image-upload">
						<IconImage src="/photo.svg" alt="Upload" />
					</IconWrapper>
				</form>
			</div>
		</ProfileWrapper>
	);
}

export default ProfileImageUploader;
