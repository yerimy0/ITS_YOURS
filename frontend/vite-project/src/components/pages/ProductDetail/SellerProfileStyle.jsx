import styled from 'styled-components';

const SellerProfile = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Profile = styled.div`
	width: 56px;
	height: 56px;
`;
const ProfileImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;
const Div = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const NickName = styled.p`
	display: flex;
	align-items: center;
	font-size: 20px;
	font-style: normal;
	font-weight: 500;
	line-height: 28px;
	margin: 0;
`;
const Category = styled.p`
	display: flex;
	height: 23px;
	align-items: center;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	margin: 0;
	color: #444;
`;

export { SellerProfile, Profile, ProfileImg, Div, NickName, Category };
