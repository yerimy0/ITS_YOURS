import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Paginator, { PagiantorContext } from '../Paginator/';

function AdminReport() {
	const perPage = 10; // 페이지 당
	const { currentPage } = useContext(PagiantorContext);
	const [data, setData] = useState([
		{
			id: '김김김',
			title: '불량거래지롱헤헤',
			date: '2024-04-01',
			detail: '사기가 의심돼요.',
			Process: '처리',
		},
		{
			id: '박박박',
			title: '불량거래지롱헤헤',
			date: '2024-04-01',
			detail: '이것도 사기인 것 같아요.',
			Process: '미처리',
		},
		{
			id: 'Jane Cooper',
			title: '불량거래지롱헤헤',
			date: '2024-04-01',
			detail: '사기가 의심돼요.',
			Process: '처리',
		},
		{
			id: 'Jane Cooper',
			title: '불량거래지롱헤헤',
			date: '2024-04-01',
			detail: '이것도 사기인 것 같아요.',
			Process: '미처리',
		},
		// ...추가 데이터
	]);

	const currentData = data.slice(currentPage * perPage, (currentPage + 1) * perPage);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('https://api.example.com/reports');
				if (!res.ok) {
					throw new Error('네트워크 응답이 올바르지 않습니다.');
				}
				const result = await res.json();
				setData(result);
			} catch (error) {
				console.error('데이터를 가져오는 중 오류발생: ', error);
			}
		};

		fetchData();
	}, []);

	return (
		<Container>
			<TableTitle>신고내역 처리</TableTitle>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeader>판매자 ID</TableHeader>
						<TableHeader>글 제목</TableHeader>
						<TableHeader>신고일자</TableHeader>
						<TableHeader>신고 내용</TableHeader>
						<TableHeader>신고처리</TableHeader>
					</TableRow>
				</TableHead>
				<TableBody>
					{currentData.map((item, index) => (
						<TableRow key={index}>
							<TableCell>{item.id}</TableCell>
							<TableCell>{item.title}</TableCell>
							<TableCell>{item.date}</TableCell>
							<TableCell>{item.detail}</TableCell>
							<TableCell>
								<ReportProcess processed={item.Process === '처리'}>{item.Process}</ReportProcess>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<PaginationContainer>
				<Paginator totalItems={data.length} perPage={perPage}></Paginator>
			</PaginationContainer>
		</Container>
	);
}

export default AdminReport;

const Container = styled.div`
	width: 1440px;
	max-width: 100%;
	margin: 0 auto;
	padding: 20px;
	background: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	font-family: suit;
	border-radius: 10px;
`;

const TableTitle = styled.div`
	color: #000;
	font-family: suit;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-top: 20px;
`;

const TableHead = styled.thead`
	margin-bottom: 10px;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
	&:nth-child(even) {
		background: #f9f9f9;
	}
`;

const TableCell = styled.td`
	padding: 10px;
	text-align: left;
	border-top: 1px solid #e1e1e1;
	text-align: center;
	justify-content: center;
`;

const TableHeader = styled.th`
	padding: 10px;
	color: #000;
	font-family: suit;
	font-size: 14px;
	font-style: normal;
	line-height: normal;
	letter-spacing: -0.14px;
`;

const ReportProcess = styled.div`
	color: ${props => (props.processed ? 'blue' : 'red')};
	text-align: center;
	font-family: suit;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: -0.14px;
`;

const PaginationContainer = styled.div`
	padding-top: 20px;
	text-align: center;
`;
