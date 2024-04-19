import styled from 'styled-components';

export const PageContainer = styled.div`
	padding: 100px 0 150px 0;
	max-width: 800px;
	margin: 0 auto;
`;

export const Greeting = styled.h1`
	/* font-size: 48px; */
	margin-bottom: 20px;

	h3 {
		font-size: 32px;
		font-weight: 400;
	}

	h4 {
		font-size: 42px;
	}

	@media (max-width: 800px) {
		h4 {
			font-weight: 600;
		}
	}
`;

export const NameBadge = styled.div`
	display: flex;
	align-items: end;
	gap: 10px;
	font-size: 70px;
`;

export const EditButtonStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ded8e1;
	border-radius: 50%;
	padding: 8px;
	width: 20px;
	height: 20px;
	background-image: url('/pencil.svg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: 20px;
	margin-bottom: 5px;
`;

export const LikeAndBookmark = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
`;

export const Button = styled.button`
	padding: 20px 30px;
	margin-top: 30px;
	width: 100%;
	font-size: 18px;
	font-weight: 500;
	background-color: #fff;
	border: 1px solid #ded8e1;
	border-radius: 20px;
	cursor: pointer;

	&:hover {
		border: 1px solid #009dff;
		color: #000;
	}
`;

export const StyledButton = styled(Button)`
	display: flex;
	justify-content: space-between;
	align-items: center;

	img {
		width: 24px;
		height: 24px;
	}
`;

export const ButtonContent = styled.span`
	flex: 1;
	text-align: left;
`;

export const StyledArrowIcon = styled.svg`
	width: 24px;
	height: 24px;
	color: currentColor;
`;

export const InfoBox = styled.div`
	padding: 10px 20px;
	margin: 10px 0;
	border-radius: 10px;
	/* background-image: url(${props => props.backgroundImage}); */
	background-size: 100px 100px;
	background-repeat: no-repeat;
	background-position: center;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ded8e1;
	border: 1px solid #ded8e1;
	width: 80px;
	height: 80px;

	&:hover {
		cursor: pointer;
		transition: border-color 0.3s;
		border-color: #009dff;
	}

	&:not(:nth-child(2)):hover {
		cursor: auto;
		&:hover {
			border-color: #ded8e1;
		}
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: black;
`;

export const Label = styled.div`
	font-size: 14px;
	font-weight: 600;
	margin-bottom: -10px;
	margin-top: 10px;
`;

export const Value = styled.div`
	font-size: 48px;
	font-weight: 700;
`;

export const ProfileImage = styled.div`
	flex-shrink: 0;
	width: 270px;
	height: auto;
	aspect-ratio: 1 / 1;
	border-radius: 50%;
	background-color: #009dff;
	background-image: url(${props => props.src}); // imageUrl을 src로 변경
	background-size: cover;
	background-position: center;
	margin-left: auto;

	@media (max-width: 1000px) {
		width: 170px;
		margin-bottom: 20px;
	}
`;

export const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	@media (max-width: 1000px) {
		padding: 0 15px;
	}
`;

export const ProfileSection = styled.div`
	display: flex;
	align-items: end;
	margin-bottom: 30px;

	@media (max-width: 1000px) {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		margin-bottom: 30px;
		flex-wrap: wrap;
	}
`;

export const LeftSection = styled.div`
	flex: 1;
`;

export const RightSection = styled.div``;
