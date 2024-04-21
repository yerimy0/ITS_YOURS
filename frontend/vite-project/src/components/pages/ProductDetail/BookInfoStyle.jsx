import styled from 'styled-components';

const BookInfo = styled.div`
	width: 100%;
	height: 140px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
	margin: 40px 0 0 0;
`;
const Div = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
const SubTilte = styled.p`
	display: flex;
	align-items: center;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 28px;
	margin: 0;
	color: #444;
`;

const SubContent = styled.p`
	display: flex;
	align-items: center;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 20px;
	margin: 0;
	color: #444;
`;

export { BookInfo, Div, SubTilte, SubContent };
