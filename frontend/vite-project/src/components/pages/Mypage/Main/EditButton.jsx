import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EditButtonStyle } from './ProfileStyles';

function EditButton() {
	const navigate = useNavigate();

	const handleEditButtonClick = () => {
		navigate('/profileedit');
	};

	return <EditButtonStyle onClick={handleEditButtonClick}></EditButtonStyle>;
}

export default EditButton;
