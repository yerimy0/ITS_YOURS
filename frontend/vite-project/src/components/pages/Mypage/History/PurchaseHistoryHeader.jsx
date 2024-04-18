import styled from 'styled-components';

const PurchaseHistoryHeader = () => {
	return (
		<InPurchaseHistoryHeader>
			<PurchaseHistoryTitle>나의 구매내역</PurchaseHistoryTitle>
		</InPurchaseHistoryHeader>
	);
};

const InPurchaseHistoryHeader = styled.section`
	display: flex;
	flex-direction: column;
	gap: 30px;
	max-width: 100%;
	align-items: center;
`;

const PurchaseHistoryTitle = styled.h1`
	font-size: 57px;
	font-weight: 400;
	line-height: normal;

	@media (max-width: 500px) {
		font-size: 46px;
	}
`;

export default PurchaseHistoryHeader;
