import React, { useState, useEffect } from 'react';
import {
	RegionList,
	UniversityList,
	Item,
	FilterList,
	Buttons,
	FilterInButton,
} from './ProductFilterStyle';
import { fetchRegions } from '../../apis/service/CategoriesApi';

function ProductFilterLogic({ onApplyFilter, onCloseFilter, selectedRegion, selectedUniversity }) {
	const [regions, setRegions] = useState([]);
	const [currentRegion, setCurrentRegion] = useState(selectedRegion);
	const [currentUniversity, setCurrentUniversity] = useState(selectedUniversity);
	const [universities, setUniversities] = useState([]);

	// 컴포넌트가 마운트될 때 선택된 지역과 대학교 초기화
	useEffect(() => {
		setCurrentRegion(selectedRegion);
		setCurrentUniversity(selectedUniversity);
	}, [selectedRegion, selectedUniversity]);

	useEffect(() => {
		fetchRegions()
			.then(data => {
				// 데이터를 이용한 로직
				if (Array.isArray(data)) {
					const sortedRegions = data.sort((a, b) => a.region.localeCompare(b.region));
					setRegions(sortedRegions);
					if (currentRegion) {
						const selectedRegionData = sortedRegions.find(
							region => region.region === currentRegion,
						);
						if (selectedRegionData) {
							setUniversities(['전체', ...selectedRegionData.universities]);
						}
					}
				}
			})
			.catch(err => {
				console.error('지역 데이터를 가져오는 중 오류가 발생했습니다.', err);
			});
	}, [currentRegion]);

	// 지역 선택했을 때 호출
	const handleRegionSelect = regionId => {
		const regionData = regions.find(region => region._id === regionId);
		if (regionData) {
			setCurrentRegion(regionData.region);
			setUniversities(['전체', ...regionData.universities]);
		}
		setCurrentUniversity('전체');
	};

	// 대학교 선택했을 때 호출
	const handleUniversitySelect = university => {
		setCurrentUniversity(prevUniversity => (prevUniversity === university ? '전체' : university));
		if (university !== '전체') {
			const regionData = regions.find(region => region.universities.includes(university));
			if (regionData) {
				setCurrentRegion(regionData.region);
			}
		}
	};

	const handleApplyFilter = () => {
		const selectedRegionName = regions.find(region => region.region === currentRegion)?.region;

		onApplyFilter(selectedRegionName, currentUniversity);
		onCloseFilter();
	};

	const handleResetFilter = () => {
		setCurrentRegion('');
		setCurrentUniversity('');
		onApplyFilter('', '');
		onCloseFilter();
	};

	return (
		<>
			<FilterList className="filterlist">
				<RegionList className="regionlist">
					{regions.map(region => (
						<Item
							key={region._id}
							className={currentRegion === region.region ? 'selected' : ''}
							onClick={() => handleRegionSelect(region._id)}
						>
							{region.region}
						</Item>
					))}
				</RegionList>

				<UniversityList className="universitylist">
					{universities.map(university => (
						<Item
							key={university._id} // 대학의 고유한 ID를 key로 사용
							className={currentUniversity === university.name ? 'selected' : ''}
							onClick={() => handleUniversitySelect(university.name)} // 대학 이름을 전달
						>
							{university.name}
						</Item>
					))}
				</UniversityList>
			</FilterList>
			<Buttons className="buttons">
				<FilterInButton
					className="but1"
					color="#009DFF"
					backgroundColor="#fff"
					onClick={handleResetFilter}
				>
					초기화
				</FilterInButton>
				<FilterInButton color="#fff" backgroundColor="#009DFF" onClick={handleApplyFilter}>
					확인
				</FilterInButton>
			</Buttons>
		</>
	);
}

export default ProductFilterLogic;
