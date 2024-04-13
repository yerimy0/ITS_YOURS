import styled from 'styled-components';

export const Container = styled.div`
	max-width: 800px;
	margin: 0 auto;
`;

export const InquiryList = styled.ul`
	list-style: none;
	padding: 0;
	border-top: 1px solid #ccc;
`;

export const InquiryItem = styled.li`
	border-bottom: 1px solid #ccc;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin: 20px 0;
`;

export const Content = styled.div`
	margin: 20px 100px 0 0;
	display: ${props => (props.show ? 'block' : 'none')};
`;

export const ButtonStyles = styled.button`
	padding: 8px 15px;
	font-size: 10px;
	cursor: pointer;
	border-radius: 20px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 60px;
	height: 40px;
`;

export const Button = styled(ButtonStyles)`
	background-color: white;
	border: 1px solid #009dff;
	color: #009dff;
	&:hover {
		background-color: #009dff;
		color: white;
	}
`;

export const Status = styled(ButtonStyles)`
	background-color: #009dff;
	border: none;
	color: white;
	margin-right: 10px;
`;

export const ActionContainer = styled.div`
	display: flex;
	align-items: center;
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
`;
