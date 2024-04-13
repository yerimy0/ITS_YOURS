import styled from 'styled-components';

const PaginationContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
`;

const NavigatorContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;

const PageNumber = styled.span`
	width: 40px;
	height: 35px;
	padding: 5px 10px;
	display: block;
	margin: 0 5px;
	cursor: pointer;
	border-radius: 5px;
	text-align: center;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: 0.15px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	box-sizing: border-box;
	background: ${props => (props.active ? '#009dff' : 'E7E7E7')};
	color: ${props => (props.active ? '#fff' : '888')};
`;

export { PaginationContainer, NavigatorContainer, PageNumber };
