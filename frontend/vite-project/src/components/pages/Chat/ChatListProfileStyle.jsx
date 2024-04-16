import styled from 'styled-components';

const ProfileWrap = styled.div`
	width: 100%;
	display: flex;
	padding: 10px;
	align-items: center;
	border-radius: 10px;
	cursor: pointer;
	margin-bottom: 20px;

	&:active,
	&:focus,
	&.active {
		background: #f4f4f4;
	}
`;

const Profile = styled.div``;

const ProfileImg = styled.img`
	width: 56px;
	height: 56px;
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
	overflow: hidden;
	white-space: normal;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	width: 70%;
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
	width: 20%;
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
