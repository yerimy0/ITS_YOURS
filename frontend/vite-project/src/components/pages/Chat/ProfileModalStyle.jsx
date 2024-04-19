import styled from 'styled-components';

const ModalWrap = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 5;
`;

const ModalContent = styled.div`
	position: relative;
	display: flex;
	width: 500px;
	height: auto;
	padding: 30px 0;
	border-radius: 20px;
	background: #fff;
	box-shadow: 15px 15px 10px 0px rgba(0, 0, 0, 0.25);
	flex-direction: column;
	align-items: center;

	@media (max-width: 900px) {
		width: 85%;
	}
`;
const ClearWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;
const ClearButton = styled.button`
	cursor: pointer;
	border: none;
	background: none;
	cursor: pointer;
	position: absolute;
	top: 15px;
	right: 15px;
	color: #ded8e1;
	font-size: 24px;
	font-weight: 400;
`;

const TextWrap = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Text = styled.p`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 26px;
	font-style: normal;
	font-weight: 600;
	margin: 0;

	@media (max-width: 900px) {
		font-size: 22px;
	}
`;
const NickName = styled.p`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 22px;
	font-style: normal;
	font-weight: 600;
	line-height: 28px;
	margin: 0;

	@media (max-width: 900px) {
		font-size: 18px;
	}
`;

const Profile = styled.div`
	margin: 15px 0;
	width: 200px;
	height: 200px;

	@media (max-width: 900px) {
		width: 130px;
		height: 130px;
	}
`;

const ProfileImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	object-fit: cover;
`;

const EvaluationWrap = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 10px 0;
	gap: 10px;
`;
const GoodContainer = styled.div`
	width: 184px;
	height: 184px;
	border-radius: 30px;
	border: 1px solid #ded8e1;
	background-image: url('/evaluation_good.png');
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 900px) {
		width: 120px;
		height: 120px;
		background-size: 80%;
	}
`;

const BadContainer = styled.div`
	width: 184px;
	height: 184px;
	border-radius: 30px;
	border: 1px solid #ded8e1;
	background-image: url('/evaluation_down.png');
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 900px) {
		width: 120px;
		height: 120px;
		background-size: 80%;
	}
`;

const TextContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const Evaluation = styled.p`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;
	margin: 0;
`;
const EvaluationCount = styled.p`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 40px;
	margin: 0;
`;

const University = styled.p`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 16px;
	font-weight: 500;
	margin: 20px 0 3px;
	@media (max-width: 800px) {
		word-break: keep-all;
		margin-bottom: 10px;
		width: 90%;
	}
`;
const LocalDistrict = styled.p`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	margin: 0;

	@media (max-width: 800px) {
		word-break: keep-all;
		width: 90%;
	}
`;

export {
	ModalWrap,
	ModalContent,
	ClearWrap,
	ClearButton,
	TextWrap,
	Text,
	NickName,
	Profile,
	ProfileImg,
	EvaluationWrap,
	GoodContainer,
	BadContainer,
	TextContainer,
	Evaluation,
	EvaluationCount,
	University,
	LocalDistrict,
};
