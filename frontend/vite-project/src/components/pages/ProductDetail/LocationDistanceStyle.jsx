import styled from 'styled-components';

const LocationDistance = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
`;

const Title = styled.p`
	display: flex;
	align-items: center;
	font-size: 28px;
	font-style: normal;
	font-weight: 700;
	line-height: 36px;
	margin: 10px 0;
`;

const Content = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	margin: 0;
`;

export { LocationDistance, Title, Content };
