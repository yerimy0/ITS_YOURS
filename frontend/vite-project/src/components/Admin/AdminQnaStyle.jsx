import styled from 'styled-components';

export const Container = styled.div`
	width: 1440px;
	max-width: 100%;
	margin: 0 auto;
	padding: 20px;
	background: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	font-family: suit;
	border-radius: 10px;
`;

export const TableTitle = styled.div`
	color: #000;
	font-family: suit;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-top: 20px;
`;

export const TableHead = styled.thead`
	margin-bottom: 10px;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
	&:nth-child(even) {
		background: #f9f9f9;
	}
	&:hover {
		cursor: ${props => (props.processed ? 'default' : 'pointer')};
	}
`;

export const TableCell = styled.td`
	padding: 10px;
	text-align: left;
	border-top: 1px solid #e1e1e1;
	text-align: center;
	justify-content: center;
`;

export const TableHeader = styled.th`
	padding: 10px;
	color: #000;
	font-family: suit;
	font-size: 14px;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.14px;
`;

export const ReportProcess = styled.span`
	color: ${props => (props.isCompleted === true ? 'blue' : 'red')};
	text-align: center;
	font-family: suit;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.14px;
`;

export const PaginationContainer = styled.div`
	padding-top: 20px;
	text-align: center;
`;
