import React from 'react';
import { InputWithIcon, SearchInput, InputIcon } from './UsersStyles';

function UniversitySearchForm({ university, setUniversity, onSearchUniversity }) {
	return (
		<InputWithIcon>
			<SearchInput
				type="text"
				placeholder="대학명을 입력해주세요"
				value={university}
				onChange={e => setUniversity(e.target.value)}
			/>
			<InputIcon src="/ReadingGlasses.svg" alt="Search" onClick={onSearchUniversity} />
		</InputWithIcon>
	);
}

export default UniversitySearchForm;
