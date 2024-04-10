import styled from 'styled-components';

export const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%; // 컨테이너가 전체 너비를 차지하도록 조정
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 500px; // 최대 너비 설정, 필요에 따라 조정하세요.
	background: #fff; // 배경색, 이미지에 따라 조정하세요.
	padding: 20px;
	border-radius: 8px; // 모서리 둥글기, 이미지에 따라 조정하세요.
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // 그림자 효과, 이미지에 따라 조정하세요.
	margin-bottom: 20px; // 폼과 다른 요소들 사이의 간격
`;

export const TextArea = styled.textarea`
	padding: 10px;
	margin: 10px 0;
	border: 1px solid #ccc;
	border-radius: 4px;
	width: 100%; // 전체 너비를 차지하도록 조정
	height: 150px; // 충분한 입력 공간을 위한 높이, 필요에 따라 조정하세요
	font-size: 16px; // 입력 텍스트의 폰트 크기, 필요에 따라 조정하세요
	resize: none; // 사용자가 텍스트 영역의 크기를 조절하지 못하게 설정
`;

export const Input = styled.input`
	padding: 10px;
	margin-right: 10px; // 검색 버튼과의 간격
	border: 1px solid #ccc;
	border-radius: 4px;
	width: calc(100% - 120px); // 버튼 너비를 고려한 조정
`;

export const SubmitButton = styled.button`
	padding: 15px 30px;
	margin-top: 30px; // 상단 내용과의 간격
	border: none;
	border-radius: 20px;
	background-color: #009dff;
	color: white;
	font-size: 18px; // 버튼 폰트 크기
	cursor: pointer;
	width: 80%; // 너비 조정
	max-width: 300px; // 최대 너비 설정

	&:hover {
		background-color: #007acc; // 호버 상태일 때 색상 변경
	}
`;

export const ErrorText = styled.p`
	color: #ff3860;
	margin-top: 10px;
`;
