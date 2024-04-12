import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	padding: 150px;
`;

export const Logo = styled.img`
	max-width: auto;
	max-height: 60px;
	margin-bottom: 2rem;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 400px;
`;

export const Input = styled.input`
	margin-top: 1rem;
	padding: 0.7rem;
	border: 1px solid #009dff;
	border-radius: 20px;
	color: #79747e;
`;

export const Button = styled.button`
	padding: 0.7rem;
	margin-top: 1rem;
	font-size: 14px;
	background-color: #009dff;
	color: white;
	border: none;
	border-radius: 20px;
	cursor: pointer;

	&:hover {
		background-color: #002d7a;
	}
`;

export const FrameGroup = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin: 2rem 0;
`;

export const ClickableWrapper = styled.div`
	cursor: pointer;
`;

export const Div1 = styled.div`
  font-size: 1rem;
  color: #79747E;
  &:hover {
    text-decoration: underline;
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Div2 = styled.div`
	font-size: 1rem;
	color: #79747e;
	padding: 0 10px;
`;

export const SocialLogin = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

export const SocialLoginTitle = styled.div`
	text-align: center;
	margin: 20px 0;
	color: #79747e;
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const SocialButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 1rem;
`;

export const SocialButton = styled.button`
	padding: 0.5rem;
	border: none;
	cursor: pointer;
	background-color: #fff;

	img {
		width: 45px;
		height: auto;
	}
`;

export const ProfileWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	margin-bottom: 2rem;
`;

export const ProfileImage = styled.img`
	width: 120px;
	height: 120px;
	border-radius: 50%;
	object-fit: cover;
	background-color: #009dff;
`;

export const IconWrapper = styled.label`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	background-color: #ded8e1;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

export const IconImage = styled.img`
	width: 20px;
	height: 20px;
`;

export const HiddenFileInput = styled.input`
	display: none;
`;

export const Title = styled.h1`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 30px;
	font-size: 48px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;
	text-align: center;
	margin: 0;
`;

export const ErrorMessage = styled.div`
	color: #b3261e;
	font-size: 12px;
	margin-left: 10px;
`;
