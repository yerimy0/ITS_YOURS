import { useContext } from 'react';
import { PaginatorContext } from './index';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { NavigatorContainer } from './PaginatorStyle';
import PageBlock from './PageBlock';

const Navigator = () => {
	const { handleClickNav, currentPage, totalPage } = useContext(PaginatorContext);

	const onClickPrev = () => {
		if (currentPage <= 0) {
			return;
		}
		handleClickNav(-1);
	};

	const onClickNext = () => {
		if (currentPage >= totalPage - 1) {
			return;
		}
		handleClickNav(1);
	};

	const pages = Array.from({ length: totalPage }, (_, index) => index);

	return (
		<NavigatorContainer>
			<GrFormPrevious size="24" color="#009dff" onClick={onClickPrev} />
			{pages.map((page, index) => (
				<PageBlock key={`pageblock-${index}`} page={page} />
			))}
			<GrFormNext size="24" color="#009dff" onClick={onClickNext} />
		</NavigatorContainer>
	);
};

export default Navigator;
