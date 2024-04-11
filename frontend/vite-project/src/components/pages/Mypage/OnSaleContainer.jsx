import React from 'react';
import styled from 'styled-components';
import OnSaleCard from '../../MypageHistoryCard/OnSaleCard';

const OnSaleContainer = ({ items }) => {
	return (
		<SalesHistoryWrap>
			{items.map((item, index) => (
				<ForSalesList key={index}>
					<OnSaleCard {...item} />
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
