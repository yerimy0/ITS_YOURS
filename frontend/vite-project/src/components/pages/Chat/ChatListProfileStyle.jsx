import styled from 'styled-components';

const ProfileWrap = styled.div`
	width: 100%;
	display: flex;
	padding: 10px;
	align-items: center;
	box-sizing: border-box;
	border-radius: 20px;
	background: #f7f2fa;
	cursor: pointer;
`;

const Profile = styled.div`
	width: 56px;
	height: 56px;
`;

const ProfileImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	object-fit: cover;
`;

const ProfileInfo = styled.div`
	width: 100%;
	display: flex;
	padding: 0px 10px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 8px;
`;

const Wrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const NickName = styled.p`
	display: flex;
	align-items: center;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 28px;
	margin: 0;
`;

const Notification = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: #009dff;
`;

const BookName = styled.p`
	color: #666;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 20px;
	letter-spacing: 0.25px;
	margin: 0;
`;

const SendTime = styled.p`
	text-align: right;
	color: #666;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 20px;
	letter-spacing: 0.25px;
	margin: 0;
`;

export {
	ProfileWrap,
	Profile,
	ProfileImg,
	ProfileInfo,
	Wrap,
	NickName,
	Notification,
	BookName,
	SendTime,
};
