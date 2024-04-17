import React, { useState } from 'react';
import styled from 'styled-components';
import SalesHistoryHeader from '../../components/pages/Mypage/History/SalesHistoryHeader';
import OnSaleContainer from '../../components/pages/Mypage/History/OnSaleContainer';
import SoldContainer from '../../components/pages/Mypage/History/SoldContainer';
import OnSaleCard from '../../components/MypageHistoryCard/OnSaleCard';
import SoldCard from '../../components/MypageHistoryCard/SoldCard';

export const SaleStatuses = {
	FOR_SALE: '판매중',
	SOLD_OUT: '판매완료',
};

function SalesHistory() {
	const [saleStatus, setSaleStatus] = useState(SaleStatuses.FOR_SALE);

	const onSaleItems = [<OnSaleCard />];
	const soldItems = [<SoldCard />];

	return (
		<SalesHistoryWrap>
			<SalesHistoryHeader onStatusChange={setSaleStatus} currentStatus={saleStatus} />
			{saleStatus === SaleStatuses.FOR_SALE ? (
				<OnSaleContainer items={onSaleItems} />
			) : (
				<SoldContainer items={soldItems} />
			)}
		</SalesHistoryWrap>
	);
}

export default SalesHistory;

const SalesHistoryWrap = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
