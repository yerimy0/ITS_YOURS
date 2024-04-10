import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PurchaseHistoryCard from '../../MypageHistoryCard/PurchaseHistoryCard';

const PurchaseHistoryContainer = () => {
	const [purchaseList, setPurchaseList] = useState([]);

	useEffect(() => {
		async function fetchPurchaseList() {
			try {
				const response = await fetch('https://api.example.com/purchases');
				const data = await response.json();
				setPurchaseList(data);
			} catch (error) {
				console.error('구매목록을 가져오는데 실패했습니다.', error);
			}
		}

		fetchPurchaseList();
	}, []);

	return (
		<PurchaseHistoryWrap>
			{purchaseList.map(purchase => (
				<ForPurchaseList key={purchase.id}>
					<PurchaseHistoryCard purchase={purchase} />
				</ForPurchaseList>
			))}
		</PurchaseHistoryWrap>
	);
};

export default PurchaseHistoryContainer;

const PurchaseHistoryWrap = styled.section`
	padding: 20px;
	margin: 20px 100px;
`;

const ForPurchaseList = styled.div`
	width: 95%;
	border-top: 1px solid #ded8e1;
	border-bottom: 1px solid #ded8e1;
	height: auto;
	padding: 10px;
`;
