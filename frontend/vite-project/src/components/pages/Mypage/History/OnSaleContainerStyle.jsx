import styled from 'styled-components';

export const SalesHistoryWrap = styled.section`
	padding: 20px 0;
	width: 90%;
	margin: 0 auto;

	@media (max-width: 800px) {
		width: 100%;
		padding: 20px 0;
	}
`;

export const ForSalesList = styled.div`
	width: 100%;
	border-top: 1px solid #eee;
	padding: 10px 15px;
	cursor: pointer;

	&:last-child {
		border-bottom: 1px solid #eee;
	}
	&:hover {
		background: #f4f4f4;
	}

	@media (max-width: 800px) {
		padding: 10px 10px;
	}
`;

export const OnSaleVoid = styled.div`
	font-size: 20px;
	margin: 50px 0px;
	text-align: center;
	border-top: 1px solid #eee;
	border-bottom: 1px solid #eee;
	padding: 70px 0px;
	width: 100%;
`;
