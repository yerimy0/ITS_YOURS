import styled from 'styled-components';

export const Container = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;

	@media (max-width: 850px) {
	}
`;

export const InquiryList = styled.ul`
	list-style: none;
	padding: 0;
	min-height: 250px;
	border-top: 1px solid #eee;
	position: relative;
`;

export const InquiryItem = styled.li`
	padding: 20px 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #eee;

	&:hover {
		background: #f9f9f9;
	}
`;

export const Content = styled.div`
	margin: 20px 100px 0 0;
	display: ${props => (props.show ? 'block' : 'none')};
`;

export const ButtonStyles = styled.button`
	padding: 10px 0;
	font-size: 14px;
	cursor: pointer;
	border-radius: 20px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 80px;
`;

export const Button = styled(ButtonStyles)`
	background-color: #fff;
	border: 1px solid #f1f1f1;
	font-weight: 500;

	&:hover {
		border: 1px solid #009dff;
		background-color: #009dff;
		color: #fff;
		transition: all 0.5s;
	}
`;

export const Status = styled(ButtonStyles)`
	border: none;
	margin-right: 10px;
	border: 1px solid #f1f1f1;
	background: #fff;
	&:hover {
		background-color: #009dff;
		color: #fff;
		transition: all 0.5s;
	}

	@media (max-width: 850px) {
		margin-right: 0;
	}
`;

export const ActionContainer = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 850px) {
		flex-direction: column;
		gap: 10px;
	}
`;

export const InquiryButton = styled(ButtonStyles)`
	padding: 10px 20px;
	background-color: white;
	border: 1px solid #009dff;
	color: #009dff;
	font-size: 16px;
	margin: 40px auto;
	display: block;
	width: auto;
	min-width: 150px;
	&:hover {
		background-color: #009dff;
		color: white;
	}

	@media (max-width: 850px) {
	}
`;

export const EmptyMessage = styled.div`
	font-size: 20px; // 글씨 크기 20px로 설정
	color: #666; // 글씨 색상 설정 (선택적)
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
