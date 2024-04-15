import React, { useState } from 'react';
import { InputWithIcon, SearchInput, InputIcon } from '../UsersStyles';
import UniversityModal from './UniversityModal';

function UniversitySearchForm({ university, setUniversity }) {
	const [isModalOpen, setModalOpen] = useState(false);

	const handleInputClick = () => {
		setModalOpen(true);
	};

	const handleUniversitySelect = selectedUniversity => {
		setUniversity(selectedUniversity);
		setModalOpen(false);
	};

	return (
		<>
			<InputWithIcon>
				<SearchInput
					type="text"
					placeholder="대학명을 입력해주세요"
					value={university}
					readOnly
					onClick={handleInputClick}
				/>
				<InputIcon src="/ReadingGlasses.svg" alt="Search" onClick={handleInputClick} />
			</InputWithIcon>
			{isModalOpen && (
				<UniversityModal
					isOpen={isModalOpen}
					onClose={() => setModalOpen(false)}
					onSelectUniversity={handleUniversitySelect}
				/>
			)}
		</>
	);
}

export default UniversitySearchForm;
