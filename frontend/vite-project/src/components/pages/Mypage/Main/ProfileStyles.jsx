import styled from 'styled-components';

export const PageContainer = styled.div`
	padding: 100px 50px;
	max-width: 800px;
	margin: 0 auto;
`;

export const Greeting = styled.h1`
	font-size: 48px;
	margin-bottom: 20px;
`;

export const NameBadge = styled.div`
	display: flex;
	align-items: center;
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
	margin-top: 40px;
	width: 20px;
	height: 20px;
	background-image: url('/pencil.svg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: 20px;
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
	color: #000;
	font-size: 18px;
	font-weight: bold;
	background-color: #fff;
	border: 1px solid #ded8e1;
	border-radius: 20px;
	cursor: pointer;

	&:hover {
		background-color: #fff;
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
	background-image: url(${props => props.backgroundImage});
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
		border-color: #ded8e1;
		cursor: auto;
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
	width: 290px;
	height: auto;
	aspect-ratio: 1 / 1;
	border-radius: 50%;
	background-color: #009dff;
	background-image: url(${props => props.src}); // imageUrl을 src로 변경
	background-size: cover;
	background-position: center;
	margin-left: auto;
`;

export const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ProfileSection = styled.div`
	display: flex;
	align-items: center;
`;

export const LeftSection = styled.div`
	flex: 1;
`;

export const RightSection = styled.div``;
