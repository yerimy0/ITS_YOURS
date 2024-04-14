import React, { createContext, useState } from 'react';

const UserIdContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [id, setId] = useState('');

	return <UserIdContext.Provider value={{ id, setId }}>{children}</UserIdContext.Provider>;
};

export default UserIdContext;
