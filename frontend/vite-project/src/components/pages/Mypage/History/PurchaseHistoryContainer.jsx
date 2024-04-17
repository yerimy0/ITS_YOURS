import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PurchaseHistoryCard from '../../../MypageHistoryCard/PurchaseHistoryCard';
import { fetchPurchaseItems } from './PurchaseApi';

const PurchaseHistoryContainer = () => {
	const [purchaseList, setPurchaseList] = useState([]);
	const { id } = useParams(); // useParams를 사용하여 buyerid 가져오기

	useEffect(() => {
		if (id) {
			fetchPurchaseItems(id)
				.then(data => {
					const validItems = data.filter(item => item.isCompleted === true);
					setPurchaseList(validItems);
				})
				.catch(error => {
					console.error('구매목록을 가져오는데 실패했습니다.', error);
				});
		}
	}, [id]);

	return (
		<PurchaseHistoryWrap>
			{purchaseList.map(purchase => (
				<ForPurchaseList key={purchase._id}>
					<PurchaseHistoryCard
						imgUrls={purchase.imgUrls}
						price={purchase.price}
						sellerId={purchase.sellerId}
						name={purchase.name} // 추가된 정보
						buyDate={purchase.buyDate} // 추가된 정보
					/>
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
