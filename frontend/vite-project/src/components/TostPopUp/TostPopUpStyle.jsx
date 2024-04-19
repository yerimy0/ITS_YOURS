import styled from 'styled-components';

const TostWrap = styled.div`
	/* width: 30%; */
	z-index: 5;
	position: fixed;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	background: #fff;
	padding: 10px 20px;
	border-radius: 20px;

	@media (max-width: 800px) {
		width: 80%;
	}
`;

const Text = styled.p`
	width: 100%;
	display: flex;
	padding: 8px;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 16px;
	font-weight: 500;
	margin: 0;

	@media (max-width: 600px) {
		font-size: 15px;
	}
`;
export { TostWrap, Text };
