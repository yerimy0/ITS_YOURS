import React from 'react';
import {
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
} from './ProfileModalStyle';

function ProfileModal({ isOpen, onClose }) {
	if (!isOpen) return null;
	return (
		<ModalWrap>
			<ModalContent>
				<ClearWrap>
					<ClearButton onClick={onClose}>X</ClearButton>
				</ClearWrap>
				<TextWrap>
					<Text>안녕하세요</Text>
					<NickName>카페인 줄여야지님의 페이지입니다.</NickName>
				</TextWrap>
				<Profile>
					<ProfileImg src="/profile.jpg" />
				</Profile>
				<EvaluationWrap>
					<GoodContainer>
						<TextContainer>
							<Evaluation>좋아요</Evaluation>
							<EvaluationCount>35</EvaluationCount>
						</TextContainer>
					</GoodContainer>
					<BadContainer>
						<TextContainer>
							<Evaluation>나빠요</Evaluation>
							<EvaluationCount>10</EvaluationCount>
						</TextContainer>
					</BadContainer>
				</EvaluationWrap>
				<University>카페인 줄여야지님의 대학교는 서울대학교입니다.</University>
				<LocalDistrict>카페인 줄여야지님의 위치는 관악구 입니다.</LocalDistrict>
			</ModalContent>
		</ModalWrap>
	);
}

export default ProfileModal;
