import React, { useRef, useState } from 'react';
import { InputWithIcon, SearchInput, InputIcon, ErrorMessage } from '../UsersStyles';
import UniversityModal from './UniversityModal';
import { validateUniversity } from '../ValidationService';

function UniversitySearchForm({ university, setUniversity }) {
	const [isModalOpen, setModalOpen] = useState(false);
	const [universityError, setUniversityError] = useState('');
	const inputRef = useRef(null);

	const handleInputClick = () => {
		setModalOpen(true);
		setUniversityError('');
	};

	const handleUniversitySelect = selectedUniversity => {
		setUniversity(selectedUniversity);
		setModalOpen(false);
		inputRef.current.focus();
	};

	const handleBlur = () => {
		const error = validateUniversity(university);
		setUniversityError(error);
	};

	return (
		<>
			<InputWithIcon>
				<SearchInput
					ref={inputRef}
					type="text"
					placeholder="대학명을 입력해주세요"
					value={university}
					readOnly
					onClick={handleInputClick}
					onBlur={handleBlur}
				/>
				<InputIcon src="/ReadingGlasses.svg" alt="Search" onClick={handleInputClick} />
			</InputWithIcon>
			{universityError && <ErrorMessage>{universityError}</ErrorMessage>}
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
