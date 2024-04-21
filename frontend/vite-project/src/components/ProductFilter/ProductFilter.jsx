import React, { useState, useRef, useEffect } from 'react';
import { LuSlidersHorizontal } from 'react-icons/lu';
import {
	Alignments,
	Bilnd,
	Alignment,
	Filter,
	FilterButton,
	FilterContent,
} from './ProductFilterStyle';
import ProductFilterLogic from './ProductFilterLogic';

const ProductFilter = ({ onFilterChange, onSortChange }) => {
	const [showButtons, setShowButtons] = useState(false);
	const filterRef = useRef(null);

	// 정렬 상태
	const [latestClicked, setLatestClicked] = useState(false);
	const [cheapestClicked, setCheapestClicked] = useState(false);

	// 필터 상태
	const [selectedLocation, setSelectedLocation] = useState('');
	const [selectedUniversity, setSelectedUniversity] = useState('');

	// 정렬 옵션 변경
	const handleSortChange = sortOption => {
		onSortChange(sortOption);
		setLatestClicked(sortOption === 'latest');
		setCheapestClicked(sortOption === 'cheapest');
	};

	// 최신순 클릭 이벤트
	const handleLatestClick = () => {
		handleSortChange('latest');
	};

	// 저가순 클릭 이벤트
	const handleCheapestClick = () => {
		handleSortChange('cheapest');
	};

	// 필터 창 열기
	const openFilter = () => {
		setShowButtons(true);
	};

	// 필터 창 닫기
	const closeFilter = () => {
		setShowButtons(false);
	};

	// 필터 창 외부 클릭 시 창 닫기
	const handleClickOutside = e => {
		if (filterRef.current && !filterRef.current.contains(e.target)) {
			closeFilter();
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<>
			<Alignments>
				<Bilnd>정렬</Bilnd>
				<Alignment onClick={handleLatestClick} isActive={latestClicked}>
					최신순
				</Alignment>
				<Alignment onClick={handleCheapestClick} isActive={cheapestClicked}>
					저가순
				</Alignment>
			</Alignments>
			<Filter>
				<FilterButton onClick={openFilter}>
					<LuSlidersHorizontal size="24" />
					필터
				</FilterButton>
				{showButtons && (
					<FilterContent ref={filterRef}>
						<ProductFilterLogic
							onApplyFilter={(location, university) => {
								onFilterChange(location, university);
								setSelectedLocation(location);
								setSelectedUniversity(university);
							}}
							onCloseFilter={closeFilter}
							selectedLocation={selectedLocation}
							selectedUniversity={selectedUniversity}
						/>
					</FilterContent>
				)}
			</Filter>
		</>
	);
};

export default ProductFilter;
