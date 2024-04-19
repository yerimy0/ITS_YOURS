import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PurchaseHistoryCard from '../../../MypageHistoryCard/PurchaseHistoryCard';
import { fetchPurchaseItems } from '../../../../apis/service/PurchaseApi';

const PurchaseHistoryContainer = () => {
	const [purchaseList, setPurchaseList] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			fetchPurchaseItems(id)
				.then(data => {
					setPurchaseList(data);
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
	padding: 20px 20px 0;
	margin: 40px 0;
	min-height: 350px;
	width: 90%;
	margin: 0 auto;
	border-bottom: 1px solid #eee;

	@media (max-width: 500px) {
		width: 100%;
		padding: 0;
	}
`;

const ForPurchaseList = styled.div`
	width: 100%;
	margin: 0 auto;
`;

const PurchaseVoid = styled.div`
	font-size: 20px;
	margin: 50px 0px;
	text-align: center;
	border-top: 1px solid #ded8e1;
	border-bottom: 1px solid #ded8e1;
	padding: 70px 0px;
	width: 100%;
`;
