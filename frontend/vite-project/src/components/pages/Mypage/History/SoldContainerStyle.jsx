import styled from 'styled-components';

export const SalesHistoryWrap = styled.section`
	width: 90%;
	margin: 0 auto;
	padding: 20px 0;
`;

export const ForSalesList = styled.div`
	width: 100%;
	border-top: 1px solid #eee;
	padding: 10px 15px;

	&:last-child {
		border-bottom: 1px solid #eee;
	}

	&:hover {
		cursor: pointer;
		background-color: #f4f4f4;
	}
`;

export const SoldVoid = styled.div`
	font-size: 20px;
	margin: 50px 0px;
	text-align: center;
	border-top: 1px solid #eee;
	border-bottom: 1px solid #eee;
	padding: 70px 0px;
	width: 100%;
`;
