import React from 'react';
import { InputWithIcon, SearchInput, InputIcon } from '../../../components/Users/UsersStyles';

const UniversitySearchForm = ({ university, setUniversity, onSearchUniversity }) => (
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

export default UniversitySearchForm;
