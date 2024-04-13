import { useContext } from 'react';
import { PaginatorContext } from './index';
import { PageNumber } from './PaginatorStyle';

const PageBlock = ({ page }) => {
	const { currentPage, handleClickPage } = useContext(PaginatorContext);

	return (
		<PageNumber onClick={() => handleClickPage(page)} active={currentPage === page}>
			{(page + 1).toString()}
		</PageNumber>
	);
};

export default PageBlock;
