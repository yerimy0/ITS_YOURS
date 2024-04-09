import { createContext, useState } from 'react';
import Navigator from './Navigator';
import { PaginationContainer } from './PaginatorStyle';

export const PagiantorContext = createContext({
	currentPage: 0,
	totalPage: 0,
	handleClickNav: () => {},
	handleClickPage: () => {},
});

const Paginator = ({ totalItems, perPage }) => {
	const [currentPage, setCurrentPage] = useState(0);
	const totalPage = Math.ceil(totalItems / perPage);

	const handleClickNav = direction => {
		const newPage = currentPage + direction;
		if (newPage >= 0 && newPage < totalPage) {
			setCurrentPage(newPage);
		}
	};

	const handleClickPage = page => {
		setCurrentPage(page);
	};

	const contextValue = {
		totalPage,
		currentPage,
		handleClickNav,
		handleClickPage,
	};

	return (
		<PagiantorContext.Provider value={contextValue}>
			<PaginationContainer>
				<Navigator />
			</PaginationContainer>
		</PagiantorContext.Provider>
	);
};

export default Paginator;
