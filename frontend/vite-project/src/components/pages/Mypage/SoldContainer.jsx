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
					console.log(res);
					setSoldItems(res.data.data);
				} else {
					console.log('sellerId가 제공되지 않았습니다');
				}
			} catch (error) {
				console.error('판매 완료 목록을 가져오는데 실패했습니다.', error);
			}
		};

		fetchSaleItems();
	}, [id]);

	return (
		<SalesHistoryWrap>
			{items.map((item, index) => (
				<ForSalesList key={index}>
					<SoldCard {...item} />
				</ForSalesList>
			))}
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
