import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EditButtonStyle } from './ProfileStyles'; // EditButton의 스타일을 정의한 것

function EditButton() {
	const navigate = useNavigate();

	const handleEditButtonClick = () => {
		navigate('/profileedit'); // 클릭 시 이동할 경로
	};

	return <EditButtonStyle onClick={handleEditButtonClick}></EditButtonStyle>;
}

export default EditButton;
