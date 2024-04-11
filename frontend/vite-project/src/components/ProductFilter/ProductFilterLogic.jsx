import React, { useState, useEffect } from 'react';
import {
	LocationList,
	UniversityList,
	LocationItem,
	FilterList,
	Buttons,
	FilterInButton,
} from './ProductFilterStyle';
import instance from '../../apis/axiosInstance';

function ProductFilterLogic({ onUpdateFilteredBooks, onCloseFilter }) {
	const [locations, setLocations] = useState([]);
	const [selectedLocation, setSelectedLocation] = useState('');
	const [universities, setUniversities] = useState([]);
	const [selectedUniversity, setSelectedUniversity] = useState('');
	const [isConfirmEnabled, setIsConfirmEnabled] = useState(false);

	// 컴포넌트가 마운트될 때 지역 데이터 호출
	useEffect(() => {
		fetchLocations();
	}, []);

	// 대학교 선택 여부에 따라 확인 버튼 활성/비활성화
	useEffect(() => {
		setIsConfirmEnabled(selectedUniversity !== '');
	}, [selectedUniversity]);

	// 지역 데이터
	const fetchLocations = async () => {
		try {
			const res = await instance.get('/api/locations');
			setLocations(res.data);
		} catch (err) {
			console.error('지역 데이터를 가져오는 중 오류가 발생했습니다.', err);
		}
	};

	// 대학교 데이터
	const fetchUniversities = async location => {
		try {
			const res = await instance.get(`/api/universities?location=${location}`);
			setUniversities(res.data);
		} catch (err) {
			console.error('대학교 데이터를 가져오는 중 오류가 발생했습니다.', err);
		}
	};

	// 지역을 선택했을 때 호출
	const handleLocationSelect = locationId => {
		setSelectedLocation(locationId);
		fetchUniversities(locationId); // 선택한 지역에 해당하는 대학교 데이터
		setSelectedUniversity(''); // 선택한 지역이 변경되면 선택된 대학교 초기화
	};

	// 대학교를 선택했을 때 호출
	const handleUniversitySelect = universityId => {
		setSelectedUniversity(prevUniversity => (prevUniversity === universityId ? '' : universityId));
	};

	// 필터 초기화
	const handleResetFilter = () => {
		setSelectedLocation('');
		setSelectedUniversity('');
		setUniversities([]);
		onCloseFilter();
	};

	// 확인 버튼을 눌렀을 때 호출
	const handleApplyFilter = async () => {
		if (selectedUniversity) {
			try {
				const response = await instance.get(
					`/api/products/list?region=${selectedLocation}&univName=${selectedUniversity}`,
				);
				onUpdateFilteredBooks(response.data);
			} catch (err) {
				console.error('필터링된 상품 목록을 가져오는 중 오류가 발생했습니다.', err);
			}
			onCloseFilter();
		}
	};

	return (
		<>
			<FilterList>
				<LocationList>
					{locations.map((location, index) => (
						<LocationItem
							key={index}
							className={selectedLocation === location ? 'selected' : ''}
							onClick={() => handleLocationSelect(location)}
						>
							{location}
						</LocationItem>
					))}
				</LocationList>
				<UniversityList>
					{universities.map((university, index) => (
						<LocationItem
							key={index}
							className={selectedUniversity === university ? 'selected' : ''}
							onClick={() => handleUniversitySelect(university)}
						>
							{university}
						</LocationItem>
					))}
				</UniversityList>
			</FilterList>
			<Buttons>
				<FilterInButton color="#009DFF" backgroundColor="#fff" onClick={handleResetFilter}>
					초기화
				</FilterInButton>
				<FilterInButton
					color="#fff"
					backgroundColor="#009DFF"
					disabled={!isConfirmEnabled}
					onClick={handleApplyFilter}
				>
					확인
				</FilterInButton>
			</Buttons>
		</>
	);
}

export default ProductFilterLogic;
