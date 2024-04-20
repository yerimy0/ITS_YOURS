import styled from 'styled-components';
import PurchaseHistoryHeader from '../../components/pages/Mypage/History/PurchaseHistoryHeader';
import PurchaseHistoryContainer from '../../components/pages/Mypage/History/PurchaseHistoryContainer';

function PurchaseHistory() {
	return (
		<PurchaseHistoryWrap>
			<PurchaseHistoryHeader />
			<PurchaseHistoryContainer />
		</PurchaseHistoryWrap>
	);
}

export default PurchaseHistory;

const PurchaseHistoryWrap = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 60px;
`;
