import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SoldCard from '../../MypageHistoryCard/SoldCard';
import instance from '../../../apis/axiosInstance';

const SoldContainer = () => {
	const [soldItems, setSoldItems] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchSaleItems = async () => {
			try {
				if (id) {
					const url = `/products/mySalesHistory/${id}`;
					const res = await instance.get(url);
					setSoldItems(res.data.data);
				} else {
					console.log('sellerId가 제공되지 않았습니다');
				}
			} catch (error) {
				console.error('판매 완료 목록을 가져오는데 실패했습니다.', error);
				alert('서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');
			}
		};

		fetchSaleItems();
	}, [id]);

	const handleDelete = async prodId => {
		try {
			await instance.delete(`/products/deleteMySalesHistory/${sellerId}/${prodId}`);
			const deleteItems = saleItems.filter(item => item._id !== prodId);
			setSoldItems(deleteItems);
		} catch (error) {
			console.error('아이템 삭제 실패', error);
		}
	};

	return (
		<SalesHistoryWrap>
			{soldItems.length > 0 ? (
				soldItems.map(sold => (
					<ForSalesList key={sold._id}>
						<SoldCard
							imgUrls={sold.imgUrls}
							price={sold.price}
							name={sold.name}
							sellDate={sold.sellDate}
							like={sold.like}
							chat={sold.chat}
							onDelete={() => handleDelete(sold._id)}
							id={sold._id}
							createdAt={sold.createdAt}
						/>
					</ForSalesList>
				))
			) : (
				<SoldVoid>판매완료 상품이 없습니다.</SoldVoid>
			)}
		</SalesHistoryWrap>
	);
};

export default SoldContainer;

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

const SoldVoid = styled.div`
	font-family: SUIT;
	font-size: 20px;
	margin: 50px 0px;
	text-align: center;
	border-top: 1px solid #ded8e1;
	border-bottom: 1px solid #ded8e1;
	padding: 70px 0px;
	width: 100%;
`;
