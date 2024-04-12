import { createContext, useEffect, useState } from 'react';
import Navigator from './Navigator';
import { PaginationContainer } from './PaginatorStyle';

export const PaginatorContext = createContext({
	currentPage: 0,
	totalPage: 0,
	handleClickNav: () => {},
	handleClickPage: () => {},
});

const Paginator = ({ totalItems, itemsCountPerPage, currentPage, onChange }) => {
	const [localCurrentPage, setLocalCurrentPage] = useState(currentPage);
	const totalPage = Math.ceil(totalItems / itemsCountPerPage);

	useEffect(() => {
		setLocalCurrentPage(currentPage);
	}, [currentPage]);

	const handleClickNav = direction => {
		const newPage = localCurrentPage + direction;
		if (newPage >= 0 && newPage < totalPage) {
			setLocalCurrentPage(newPage);
			onChange(newPage);
		}
	};

	const handleClickPage = page => {
		setLocalCurrentPage(page);
		onChange(page);
	};

	const contextValue = {
		totalPage,
		currentPage: localCurrentPage,
		handleClickNav,
		handleClickPage,
	};

	return (
		<PaginatorContext.Provider value={contextValue}>
			<PaginationContainer>
				<Navigator />
			</PaginationContainer>
		</PaginatorContext.Provider>
	);
};

export default Paginator;
