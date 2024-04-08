import React from 'react';
import Pagination from 'react-js-pagination';
import './PaginationBarStyle.css';

function PaginationBar({ activePage, totalItemsCount, itemsCountPerPage, onChange }) {
	return (
		<Pagination
			activePage={activePage}
			itemsCountPerPage={itemsCountPerPage} // 페이지당 아이템 수
			totalItemsCount={totalItemsCount} //전체 아이템 수
			pageRangeDisplayed={5} // 표시할 페이지 범위
			onChange={onChange} // 페이지 변경 시 호출할 콜백 함수
			hideNavigation={true} // 이전, 다음 버튼 숨김
		/>
	);
}

export default PaginationBar;
