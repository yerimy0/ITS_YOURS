import React, { useState, useEffect } from 'react';
import {
	LocationList,
	UniversityList,
	LocationItem,
	FilterList,
	Buttons,
	FilterInButton,
} from './ProductFilterStyle';
import { fetchLocations } from '../../apis/service/CategoriesApi';

function ProductFilterLogic({
	onApplyFilter,
	onCloseFilter,
	selectedLocation,
	selectedUniversity,
}) {
	const [locations, setLocations] = useState([]);
	const [currentLocation, setCurrentLocation] = useState(selectedLocation);
	const [currentUniversity, setCurrentUniversity] = useState(selectedUniversity);
	const [universities, setUniversities] = useState([]);

	// 컴포넌트가 마운트될 때 선택된 지역과 대학교 초기화
	useEffect(() => {
		setCurrentLocation(selectedLocation);
		setCurrentUniversity(selectedUniversity);
	}, [selectedLocation, selectedUniversity]);

	useEffect(() => {
		fetchLocations()
			.then(data => {
				// 데이터를 이용한 로직
				if (Array.isArray(data)) {
					const sortedLocations = data.sort((a, b) => a.region.localeCompare(b.region));
					setLocations(sortedLocations);
					if (currentLocation) {
						const selectedLocationData = sortedLocations.find(
							location => location.region === currentLocation,
						);
						if (selectedLocationData) {
							setUniversities(['전체', ...selectedLocationData.universities]);
						}
					}
				}
			})
			.catch(err => {
				console.error('지역 데이터를 가져오는 중 오류가 발생했습니다.', err);
			});
	}, [currentLocation]);

	// 지역 선택했을 떄 호출
	const handleLocationSelect = locationId => {
		const locationData = locations.find(location => location._id === locationId);
		if (locationData) {
			setCurrentLocation(locationId);
			setUniversities(['전체', ...locationData.universities]);
		}
		setCurrentUniversity('전체');
	};

	// 대학교 선택했을 때 호출
	const handleUniversitySelect = university => {
		setCurrentUniversity(prevUniversity => (prevUniversity === university ? '전체' : university));
		if (university !== '전체') {
			const locationData = locations.find(location => location.universities.includes(university));
			if (locationData) {
				setCurrentLocation(locationData.region);
			}
		}
	};

	const handleApplyFilter = () => {
		const selectedLocationName = locations.find(
			location => location.region === currentLocation,
		)?.region;

		onApplyFilter(selectedLocationName, currentUniversity);
		onCloseFilter();
	};

	const handleResetFilter = () => {
		setCurrentLocation('');
		setCurrentUniversity('');
		onApplyFilter('', '');
		onCloseFilter();
	};

	return (
		<>
			<FilterList>
				<LocationList>
					{locations.map(location => (
						<LocationItem
							key={location._id}
							className={currentLocation === location.region ? 'selected' : ''}
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
							className={currentUniversity === university ? 'selected' : ''}
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
				<FilterInButton color="#fff" backgroundColor="#009DFF" onClick={handleApplyFilter}>
					확인
				</FilterInButton>
			</Buttons>
		</>
	);
}

export default ProductFilterLogic;
