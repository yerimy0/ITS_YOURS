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
					const validItems = data.filter(item => item.isCompleted === true && item.buyerId);
					setPurchaseList(validItems);
				})
				.catch(error => {
					console.error('구매목록을 가져오는데 실패했습니다.', error);
				});
		}
	}, [id]);

	return (
		<PurchaseHistoryWrap>
			{purchaseList.length > 0 ? (
				purchaseList.map(purchase => (
					<ForPurchaseList key={purchase._id}>
						<PurchaseHistoryCard
							imgUrls={purchase.imgUrls}
							price={purchase.price}
							sellerId={purchase.sellerId}
							name={purchase.name}
							buyDate={purchase.buyDate}
						/>
					</ForPurchaseList>
				))
			) : (
				<PurchaseVoid>구매완료 상품이 없습니다.</PurchaseVoid>
			)}
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

const PurchaseVoid = styled.div`
	font-family: SUIT;
	font-size: 20px;
	margin: 50px 0px;
	text-align: center;
	border-top: 1px solid #ded8e1;
	border-bottom: 1px solid #ded8e1;
	padding: 70px 0px;
	width: 100%;
`;
