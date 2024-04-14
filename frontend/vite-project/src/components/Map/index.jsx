import { useEffect, useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function KaKao() {
	const [location, setLoacation] = useState(null);
	const [center, setCenter] = useState({
		lat: 0,
		lng: 0,
	});

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
		if (!location) return { lat: 37.592808823439, lng: 127.0530259112 }; // 기본 위치 설정

		const marker1 = { lat: 37.592808823439, lng: 127.0530259112 };
		const marker2 = { lat: location.latitude, lng: location.longitude };

		const centerLat = (marker1.lat + marker2.lat) / 2;
		const centerLng = (marker1.lng + marker2.lng) / 2;

		return { lat: centerLat, lng: centerLng };
	}

	return (
		<Map
			center={getCenter()} // 지도의 중심 좌표
			style={{ width: '1000px', height: '400px' }} // 지도 크기
			level={7}
		>
			{location && (
				<>
					<MapMarker position={{ lat: 37.592808823439, lng: 127.0530259112 }} />
					<MapMarker position={{ lat: location.latitude, lng: location.longitude }} />
				</>
			)}
		</Map>
	);
}

export default KaKao;
