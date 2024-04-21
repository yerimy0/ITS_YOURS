import { LocationDistance, Title, Content } from './LocationDistanceStyle';
import KaKao from '../../Map';

function LocationDistanceWrap() {
	return (
		<>
			<LocationDistance>
				<Title>희망 거래 장소(판매자와 거래자의 위치 거리)</Title>
				<Content>
					<KaKao />
				</Content>
			</LocationDistance>
		</>
	);
}
export default LocationDistanceWrap;
