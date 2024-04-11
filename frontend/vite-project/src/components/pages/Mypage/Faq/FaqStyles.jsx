import styled from 'styled-components';

export const Title = styled.h1`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 70px;
	padding-bottom: 20px;
	font-size: 48px;
	font-weight: 700;
	line-height: 64px;
	max-width: 800px; // 리스트와 동일한 최대 너비 설정
	margin: 0 auto; // 가운데 정렬
	width: 100%; // 전체 너비를 사용
`;

export const SubTitle = styled.div`
	margin-top: 10px; // 타이틀과 부제목 사이 간격
	font-size: 1.2rem;
	font-weight: 500;
	white-space: pre-line; // 줄바꿈 처리
	line-height: 1.5;
`;

export const UserName = styled.span`
	display: block; // 줄바꿈 효과
	font-weight: bold; // 사용자 이름을 강조 (선택 사항)
`;

export const StyledFaqList = styled.div`
	max-width: 800px;
	margin: 20px auto;
	padding: 0 20px;

	.faq-item {
		border-top: 1px solid #ccc;
		padding: 20px 0;
	}
`;

// StyledFaqItem 스타일
export const StyledFaqItem = styled.div`
	.faq-question {
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		font-size: 1.2rem;
	}

	.faq-answer {
		margin-top: 10px;
		font-size: 1rem;
		padding-left: 20px; // 왼쪽 패딩으로 정렬 맞춤
	}

	.toggle-answer {
		background: none; // 배경색 제거
		border: none; // 테두리 제거
		cursor: pointer;
	}

	.toggle-answer img {
		width: 24px;
		height: 24px;
	}
`;

export const ButtonWrapper = styled.div`
	max-width: 800px;
	margin: auto;
	display: flex;
	justify-content: flex-start;
`;

export const Button = styled.button`
	padding: 10px 20px;
	background-color: white; // 예시 색상
	border: 1px solid #009dff;
	color: #009dff;
	font-size: 16px;
	border-radius: 20px;
	cursor: pointer;
	margin-top: 20px;
	margin-bottom: 40px;
	&:hover {
		background-color: #009dff;
		color: white;
	}
`;
