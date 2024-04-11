import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Paginator, { PaginatorContext } from '../Paginator/';
import Modal from '../Modal';

function AdminReport() {
	const perPage = 10; // 페이지 당
	const { currentPage } = useContext(PagiantorContext);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	const [data, setData] = useState([
		{ id: 11, title: '사기신고', date: '2024-04-02', detail: '사기가 의심되용', Process: '미처리' },
		{ id: 22, title: '사신기고', date: '2024-04-04', detail: '사기가 의심되용', Process: '미처리' },
	]);

	const openModal = item => {
		if (item.Process === '처리') {
			return;
		}
		setSelectedItem(item);
		setIsModalOpen(true);
	};

	const handleConfirm = () => {
		const newData = data.map(item =>
			item.id === selectedItem.id ? { ...item, Process: '처리' } : item,
		);
		setData(newData);
		setIsModalOpen(false);
	};

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
		<>
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
							<TableRow
								key={index}
								onClick={() => openModal(item)}
								processed={item.Process === '처리'}
							>
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
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title="신고 처리"
				content={`"${selectedItem?.id}" 사용자를 신고 처리하시겠습니까?`}
				confirmText="처리하기"
				onConfirm={handleConfirm}
			/>
		</>
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

	&:hover {
		cursor: pointer;
	}
	${props =>
		props.processed &&
		`
	&:hover {
	cursor: default;
		}
	`}
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
