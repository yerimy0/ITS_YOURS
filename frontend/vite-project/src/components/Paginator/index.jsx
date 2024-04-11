import { createContext, useState } from 'react';
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

	const handleClickNav = direction => {
		const newPage = localCurrentPage + direction;
		if (newPage >= 0 && newPage < totalPage) {
			setLocalCurrentPage(newPage);
			onChange(newPage); // 페이지는 1부터 시작하므로 onChange에 1을 더해 호출
		}
	};

	const handleClickPage = page => {
		setLocalCurrentPage(page);
		onChange(page); // 페이지는 1부터 시작하므로 onChange에 1을 더해 호출
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
