import WishWrap from '../../components/pages/MypageWish';
import styled from 'styled-components';

function MypageWish() {
	return (
		<ProductWrap>
			<WishWrap />
		</ProductWrap>
	);
}

const ProductWrap = styled.div`
	margin: 30px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default MypageWish;
