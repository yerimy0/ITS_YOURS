import React, { createContext, useState, useEffect } from 'react';

const UserIdContext = createContext(null);

export const UserProvider = ({ children }) => {
	// 로컬 스토리지에서 사용자 ID를 가져오거나 기본값으로 빈 문자열을 사용합니다.
	const [id, setId] = useState(localStorage.getItem('userId') || '');

	// id 상태가 변경될 때마다 로컬 스토리지에 저장합니다.
	useEffect(() => {
		localStorage.setItem('userId', id);
	}, [id]);

	return <UserIdContext.Provider value={{ id, setId }}>{children}</UserIdContext.Provider>;
};

export default UserIdContext;
