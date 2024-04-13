// UniversityModal.js
import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalContent = styled.div`
	background-color: white;
	padding: 20px;
	border-radius: 10px;
`;

const ModalButton = styled.button`
	display: block;
	width: 100%;
	padding: 10px;
	margin: 10px 0;
	background: none;
	border: 1px solid #ccc;
	cursor: pointer;
	&:hover {
		background-color: #f0f0f0;
	}
`;

const UniversityModal = ({ isOpen, onClose, onSelectUniversity }) => {
	if (!isOpen) return null;

	const universities = ['서울대학교', '고려대학교', '연세대학교'];

	return (
		<Modal onClick={onClose}>
			<ModalContent onClick={e => e.stopPropagation()}>
				{universities.map(university => (
					<ModalButton key={university} onClick={() => onSelectUniversity(university)}>
						{university}
					</ModalButton>
				))}
			</ModalContent>
		</Modal>
	);
};

export default UniversityModal;
