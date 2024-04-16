import styled from 'styled-components';

const SliderContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

const SlideImage = styled.img`
	width: 450px;
	height: 450px;
	max-width: 450px;
	max-height: 450px;
	object-fit: cover;
`;

const ArrowButton = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
	border: none;
	padding: 10px;
	cursor: pointer;
	z-index: 1;

	&:first-of-type {
		left: 10px;
	}

	&:last-of-type {
		right: 10px;
	}
`;

export { SliderContainer, SlideImage, ArrowButton };
