import styled from 'styled-components';

const Content = styled.div`
	background: var(--footer, #0d1034);
	color: #fff;
	display: flex;

	width: 100vw;
	height: 150px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 23px;
	bottom: 0px;
	margin-top: 100px;
`;

const Icons = styled.div`
	display: flex;
	justify-content: center;
	gap: 27px;
`;

const Line = styled.div`
	width: 179.003px;
	height: 1px;
`;

const Developer = styled.div`
	color: #fff;

	font-size: 14px;
	text-align: center;
	line-height: 22px;
`;

export { Content, Icons, Line, Developer };
