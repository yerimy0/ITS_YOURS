import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import OnSaleCard from '../../MypageHistoryCard/OnSaleCard';
import instance from '../../../apis/axiosInstance';

const OnSaleContainer = () => {
	const [saleItems, setSaleItems] = useState([]);
	const { id: sellerId } = useParams();

	useEffect(() => {
		const fetchSaleItems = async () => {
			try {
				const url = `/api/products/mySalesHistory/${sellerId}`;
				const res = await instance.get(url);
				setSaleItems(res.data.data);
			} catch (error) {
				console.error('판매중인 목록을 불러오는데 실패했습니다.', error);
			}
		};

		fetchSaleItems();
	}, [sellerId]);

	const handleDelete = async prodId => {
		try {
			await instance.delete(`/products/deleteMySalesHistory/${sellerId}/${prodId}`);
			const deleteItems = saleItems.filter(item => item._id !== prodId);
			setSaleItems(deleteItems);
		} catch (error) {
			console.error('아이템 삭제 실패', error);
		}
	};

	return (
		<SalesHistoryWrap>
			{saleItems.map(onsale => (
				<ForSalesList key={onsale._id}>
					<OnSaleCard
						imgUrls={onsale.imgUrls}
						price={onsale.price}
						name={onsale.name}
						sellDate={onsale.sellDate}
						like={onsale.chat}
						chat={onsale.chat}
						onDelete={() => handleDelete(onsale._id)}
					/>
				</ForSalesList>
			))}
		</SalesHistoryWrap>
	);
};

export default OnSaleContainer;

const SalesHistoryWrap = styled.section`
	padding: 20px;
	margin: 20px 100px;
`;

const ForSalesList = styled.div`
	width: 95%;
	border-top: 1px solid #ded8e1;
	border-bottom: 1px solid #ded8e1;
	height: auto;
	padding: 10px;
`;
