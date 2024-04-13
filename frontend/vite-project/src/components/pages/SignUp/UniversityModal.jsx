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
	max-height: 80%; // 최대 높이 설정
	overflow-y: auto; // 내용이 넘치면 스크롤 생성
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

// 데이터 많아지면 바꿀방법
// 1. JSON 파일로 저장 -> 컴포넌트에서 사용하기

// ['서울대학교', '고려대학교', '연세대학교', '...', '기타 대학교'];

// import React from 'react';
// import universities from './universities.json'; // 데이터 불러오기

// // 컴포넌트 코드

// 2. 데이터베이스 사용 -> API 호출로

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UniversityModal = ({ isOpen, onClose, onSelectUniversity }) => {
//     const [universities, setUniversities] = useState([]);

//     useEffect(() => {
//         const fetchUniversities = async () => {
//             const response = await axios.get('/api/universities');
//             setUniversities(response.data);
//         };
//         fetchUniversities();
//     }, []);

//     if (!isOpen) return null;

//     return (
//         <Modal onClick={onClose}>
//             <ModalContent onClick={e => e.stopPropagation()}>
//                 {universities.map(university => (
//                     <ModalButton key={university} onClick={() => onSelectUniversity(university)}>
//                         {university}
//                     </ModalButton>
//                 ))}
//             </ModalContent>
//         </Modal>
//     );
// };
