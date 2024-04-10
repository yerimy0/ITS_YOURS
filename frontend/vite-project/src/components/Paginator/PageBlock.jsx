import { useContext } from 'react';
import { PagiantorContext } from '.';
import { PageNumber } from './PaginatorStyle';

const PageBlock = ({ page }) => {
	const { currentPage, handleClickPage } = useContext(PagiantorContext);

	return (
		<PageNumber onClick={() => handleClickPage(page)} active={currentPage === page}>
			{page + 1}
		</PageNumber>
	);
};

export default PageBlock;
