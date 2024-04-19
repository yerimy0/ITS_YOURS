import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paginator from '../Paginator/';
import Modal from '../Modal';
import {
	Container,
	TableTitle,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
	TableHeader,
	ReportProcess,
	PaginationContainer,
} from './AdminReportStyle';

function AdminReport() {
	const itemsPerPage = 10; // 페이지 당
	const [currentPage, setCurrentPage] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedReport, setSelectedReport] = useState(null);
	const navigate = useNavigate();
	const [data, setData] = useState([
		{ id: 11, title: '사기신고', date: '2024-04-02', detail: '사기가 의심되용', Process: '미처리' },
		{ id: 22, title: '사신기고', date: '2024-04-04', detail: '사기가 의심되용', Process: '미처리' },
	]);

	const handlePageChange = newPage => {
		setCurrentPage(newPage);
	};

	const openModal = item => {
		if (item.Process === '처리') {
			return;
		}
		setSelectedReport(item);
		setIsModalOpen(true);
	};

	const handleConfirm = () => {
		const newData = data.map(item =>
			item.id === selectedReport.id ? { ...item, Process: '처리' } : item,
		);
		navigate('/asksupportlist');
		setData(newData);
		setIsModalOpen(false);
	};

	const paginatedReportList = data.slice(
		currentPage * itemsPerPage,
		(currentPage + 1) * itemsPerPage,
	);

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
						{paginatedReportList.map((item, index) => (
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
					<Paginator
						totalItems={data.length}
						itemsCountPerPage={itemsPerPage}
						currentPage={currentPage}
						onChange={handlePageChange}
					/>
				</PaginationContainer>
			</Container>
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title="신고 처리"
				content="사용자 신고처리기능이 구현되지 않았습니다. 
				1:1 문의하기로 진행해주세요 !"
				confirmText="문의하러가기"
				onConfirm={handleConfirm}
			/>
		</>
	);
}

export default AdminReport;
