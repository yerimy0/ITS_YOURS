import React from 'react';
import styled from 'styled-components';
import SoldCard from '../../MypageHistoryCard/SoldCard';

const SoldContainer = ({ items }) => {
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
