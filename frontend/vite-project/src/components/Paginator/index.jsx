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

	const getPageRange = () => {
		const pagesPerBlock = 5; // 한 블록에 표시할 페이지 수
		const startPage = Math.floor(localCurrentPage / pagesPerBlock) * pagesPerBlock;
		const endPage = Math.min(startPage + pagesPerBlock, totalPage);
		const pageRange = [];

		for (let i = startPage; i < endPage; i++) {
			pageRange.push(i);
		}

		return pageRange;
	};

	const contextValue = {
		totalPage,
		currentPage: localCurrentPage,
		handleClickNav,
		handleClickPage,
		getPageRange,
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
