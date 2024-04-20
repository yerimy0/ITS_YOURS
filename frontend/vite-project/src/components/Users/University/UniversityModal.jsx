import React, { useState } from 'react';
import universities from './Universities';
import { Modal, ModalContent, ModalButton, Input } from './UniversityModalStyles';

const UniversityModal = ({ isOpen, onClose, onSelectUniversity }) => {
	const [search, setSearch] = useState('');
	const filteredUniversities = universities.filter(university =>
		university.toLowerCase().includes(search.toLowerCase()),
	);

	if (!isOpen) return null;

	return (
		<Modal onClick={onClose}>
			<ModalContent onClick={e => e.stopPropagation()}>
				<Input
					type="text"
					placeholder="대학교 검색"
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
				{filteredUniversities.length > 0 ? (
					filteredUniversities.map(university => (
						<ModalButton key={university} onClick={() => onSelectUniversity(university)}>
							{university}
						</ModalButton>
					))
				) : (
					<p>
						해당 대학은 현재 서비스 준비 중입니다. <br />곧 업데이트될 예정이니 조금만 기다려
						주세요!
					</p> // 검색 결과가 없을 때 메시지 표시
				)}
			</ModalContent>
		</Modal>
	);
};

export default UniversityModal;
