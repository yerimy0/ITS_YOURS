import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import OnSaleCard from '../../../MypageHistoryCard/OnSaleCard';
import instance from '../../../../apis/axiosInstance';

const OnSaleContainer = () => {
	const [saleItems, setSaleItems] = useState([]);
	const { sellerId, id } = useParams();

	useEffect(() => {
		const fetchSaleItems = async () => {
			try {
				if (id) {
					const url = `/products/mySalesHistory/${id}`;
					const res = await instance.get(url);
					setSaleItems(res.data.data);
				}
			} catch (error) {
				console.error('판매중인 목록을 불러오는데 실패했습니다.', error);
				alert('서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');
			}
		};

		fetchSaleItems();
	}, [id]);

	const handleDelete = async prodId => {
		try {
			const res = await instance.delete(`/products/deleteMySalesHistory/${sellerId}/${prodId}`);
			if (res.status === 200) {
				const deleteItems = saleItems.filter(item => item._id !== prodId);
				setSaleItems(deleteItems);
			} else {
				throw new Error('아이템 삭제 실패');
			}
		} catch (error) {
			console.error('아이템 삭제 실패', error);
		}
	};

	return (
		<SalesHistoryWrap>
			{saleItems.length > 0 ? (
				saleItems.map(onsale => (
					<ForSalesList key={onsale._id}>
						<OnSaleCard
							imgUrls={onsale.imgUrls}
							price={onsale.price}
							name={onsale.name}
							createdAt={onsale.createdAt}
							wishescount={onsale.wishescount}
							chat={onsale.chat}
							onDelete={() => handleDelete(onsale._id)}
							id={onsale._id}
						/>
					</ForSalesList>
				))
			) : (
				<OnSaleVoid>판매중인 상품이 없습니다.</OnSaleVoid>
			)}
		</SalesHistoryWrap>
	);
};

export default OnSaleContainer;

const SalesHistoryWrap = styled.section`
	padding: 20px;
	margin: 20px 100px;
`;

const ForSalesList = styled.div`
	width: 100%;
	border-top: 1px solid #ded8e1;
	border-bottom: 1px solid #ded8e1;
	height: auto;
	padding: 10px;
`;

const OnSaleVoid = styled.div`
	font-family: SUIT;
	font-size: 20px;
	margin: 50px 0px;
	text-align: center;
	border-top: 1px solid #ded8e1;
	border-bottom: 1px solid #ded8e1;
	padding: 70px 0px;
	width: 100%;
`;
