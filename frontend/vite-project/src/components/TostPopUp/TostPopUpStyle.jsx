import styled from 'styled-components';

const TostWrap = styled.div`
	width: 30%;
	z-index: 5;
	position: fixed;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	background-color: #d4d4d4;
	color: #fff;
	padding: 10px 20px;
	border-radius: 20px;
`;

const Text = styled.p`
	width: 100%;
	display: flex;
	padding: 8px;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
	margin: 0;
	color: #000;
`;
export { TostWrap, Text };
