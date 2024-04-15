import { useEffect, useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useParams } from 'react-router-dom';
import { GetDetail } from '../../apis/service/product.api';

function KaKao() {
	const { id } = useParams();
	const [sellerLat, setSellerLat] = useState(0);
	const [sellerLng, setSellerLng] = useState(0);
	async function GetSellerLoc() {
		try {
			const { latitude, longitude } = await GetDetail(id);
			setSellerLat(latitude);
			setSellerLng(longitude);
		} catch (error) {
			console.error('상품 데이터를 불러오는 중 에러 발생:', error);
		}
	}
	useEffect(() => {
		GetSellerLoc();
	}, []);

	const [location, setLoacation] = useState(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
	}, []);

	function successHandler(res) {
		console.log(res);
		const { latitude, longitude } = res.coords;
		setLoacation({ latitude, longitude });
	}

	function errorHandler(error) {
		console.log(error);
	}

	function getCenter() {
		if (!location) return { lat: sellerLat, lng: sellerLng }; // 기본 위치 설정

		const marker1 = { lat: sellerLat, lng: sellerLng };
		const marker2 = { lat: location.latitude, lng: location.longitude };

		const centerLat = (marker1.lat + marker2.lat) / 2;
		const centerLng = (marker1.lng + marker2.lng) / 2;

		return { lat: centerLat, lng: centerLng };
	}

	return (
		<Map
			center={getCenter()} // 지도의 중심 좌표
			style={{ width: '1000px', height: '400px' }} // 지도 크기
			level={9}
		>
			{location && (
				<>
					<MapMarker position={{ lat: sellerLat, lng: sellerLng }} /> {/* 판매자거리 */}
					<MapMarker position={{ lat: location.latitude, lng: location.longitude }} />{' '}
					{/* 내거리 */}
				</>
			)}
		</Map>
	);
}

export default KaKao;
