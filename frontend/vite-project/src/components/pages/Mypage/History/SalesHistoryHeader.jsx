import styled from 'styled-components';
import React from 'react';
import { SaleStatuses } from '../../../../pages/Mypage/SalesHistory';

const SalesHistoryHeader = ({ onStatusChange, currentStatus }) => {
	return (
		<InSalesHistoryHeader>
			<SalesHistoryTitle>나의 판매내역</SalesHistoryTitle>
			<SalesHistorySection2>
				<SalesStatus>
					<ForSale
						onClick={() => onStatusChange(SaleStatuses.FOR_SALE)}
						active={currentStatus === SaleStatuses.FOR_SALE}
					>
						판매중
					</ForSale>
					<SalesCompleted
						onClick={() => onStatusChange(SaleStatuses.SOLD_OUT)}
						active={currentStatus === SaleStatuses.SOLD_OUT}
					>
						판매완료
					</SalesCompleted>
				</SalesStatus>
			</SalesHistorySection2>
		</InSalesHistoryHeader>
	);
};

export default SalesHistoryHeader;

const InSalesHistoryHeader = styled.section`
	display: flex;
	flex-direction: column;
	gap: 30px;
	max-width: 100%;
	align-items: center;
`;

const SalesHistoryTitle = styled.h1`
	font-size: 57px;
	font-weight: 400;
	margin-top: 60px;

	@media (max-width: 800px) {
		font-size: 46px;
	}
`;

const SalesHistorySection2 = styled.div`
	display: flex;
	width: auto;
	align-items: flex-start;
	margin: 20px;
`;

const SalesStatus = styled.div`
	display: flex;
	width: 1000px;
	gap: 30px;
	align-items: center;
	justify-content: center;
	height: 50px;

	@media (max-width: 800px) {
		width: 80%;
		margin: 0 auto;
		font-size: 16px;
		gap: 15px;
	}
`;

const ForSale = styled.button`
	width: 200px;
	padding: 12px 0;
	border-radius: 20px;
	text-align: center;
	font-size: 18px;
	font-weight: 300;
	border: 0px;
	&:hover {
		cursor: pointer;
	}
	background: ${props => (props.active ? '#007bff' : '#fff')};
	color: ${props => (props.active ? '#fff' : '#DED8E1')};
	border: 1px solid ${props => (props.active ? '#007bff' : '#DED8E1')};
`;

const SalesCompleted = styled(ForSale)`
	width: 200px;
	border-radius: 20px;
	text-align: center;
	font-size: 18px;
	&:hover {
		cursor: pointer;
	}
	border: 1px solid ${props => (props.active ? '#007bff' : '#DED8E1')};
	background: ${props => (props.active ? '#007bff' : '#fff')};
	color: ${props => (props.active ? '#fff' : '#DED8E1')};
`;
