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

function ProductFilterLogic({ onApplyFilter, onCloseFilter }) {
	const [locations, setLocations] = useState([]);
	const [selectedLocation, setSelectedLocation] = useState('');
	const [universities, setUniversities] = useState([]);
	const [selectedUniversity, setSelectedUniversity] = useState('');

	// 컴포넌트가 마운트될 때 지역 데이터 호출
	useEffect(() => {
		fetchLocations();
	}, []);

	// 지역 데이터
	const fetchLocations = async () => {
		try {
			const res = await instance.get('/api/category');
			console.log(res.data);
			setLocations(res.data);
		} catch (err) {
			console.error('지역 데이터를 가져오는 중 오류가 발생했습니다.', err);
		}
	};

	// 지역을 선택했을 때 호출
	const handleLocationSelect = locationId => {
		setSelectedLocation(locationId);
		const selectedLocationData = locations.find(location => location._id === locationId);
		setUniversities(selectedLocationData.universities);
		setSelectedUniversity('');
	};

	// 대학교를 선택했을 때 호출
	const handleUniversitySelect = university => {
		setSelectedUniversity(prevUniversity => (prevUniversity === university ? '' : university));
	};

	// 필터 적용
	const handleApplyFilter = () => {
		onApplyFilter(selectedLocation, selectedUniversity);
		onCloseFilter();
	};

	return (
		<>
			<FilterList>
				<LocationList>
					{locations.map(location => (
						<LocationItem
							key={location._id}
							className={selectedLocation === location._id ? 'selected' : ''}
							onClick={() => handleLocationSelect(location._id)}
						>
							{location.region}
						</LocationItem>
					))}
				</LocationList>
				<UniversityList>
					{universities.map(university => (
						<LocationItem
							key={university}
							className={selectedUniversity === university ? 'selected' : ''}
							onClick={() => handleUniversitySelect(university)}
						>
							{university}
						</LocationItem>
					))}
				</UniversityList>
			</FilterList>
			<Buttons>
				<FilterInButton color="#009DFF" backgroundColor="#fff" onClick={onCloseFilter}>
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
