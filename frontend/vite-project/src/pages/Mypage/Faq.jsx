import React, { useState, useEffect } from 'react';
import FAQTitle from '../../components/pages/Mypage/Faq/FaqTitle';
import FaqList from '../../components/pages/Mypage/Faq/FaqList';
import { ButtonWrapper, Button } from '../../components/pages/Mypage/Faq/FaqStyles';
import { useNavigate } from 'react-router-dom';
import { fetchMyPageData } from '../../apis/service/MyPageMenuApi';

const inquiries = [
	{ id: 1, question: '질문 1', answer: '답변 1' },
	{ id: 2, question: '질문 2', answer: '답변 2' },
];

function Faq() {
	const navigate = useNavigate();
	const subtitleText =
		'1:1 문의하기를 통해 더 자세히 물어봐 주세요.\n상담 운영 시간 : 평일 10:00 ~ 18:00 (점심시간 12:00~13:00)';
	const [userData, setUserData] = useState({});

	useEffect(() => {
		const loadData = async () => {
			try {
				const myPageData = await fetchMyPageData();
				setUserData(myPageData);
			} catch (error) {
				console.error('Failed to fetch user data:', error);
				setUserData({ nickName: 'Guest' });
			}
		};

		loadData();
	}, []);

	return (
		<>
			<FAQTitle user={userData.nickName} />
			<FaqList inquiries={inquiries} />
			<FAQTitle title="원하는 답변을 얻지 못하셨나요?" subtitle={subtitleText} />
			<ButtonWrapper>
				<Button onClick={() => navigate('/asksupportlist')}>1:1 문의하기</Button>
			</ButtonWrapper>
		</>
	);
}

export default Faq;
