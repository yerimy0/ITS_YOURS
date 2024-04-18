import React, { useState, useEffect } from 'react';
import { fetchQnaData, qnaMailing } from '../../apis/service/AdminQnaApi';
import styled from 'styled-components';
// import Paginator from '../Paginator';
import AdminModal from './AdminModal';
import DateSlicer from '../../utils/dateSlicer';

function AdminQnA() {
	const [qnaList, setQnaList] = useState([]);
	const [selectedQna, setSelectedQna] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		const loadData = async () => {
			try {
				const data = await fetchQnaData();
				setQnaList(data.map(item => ({ ...item, isCompleted: item.isCompleted || '미처리' })));
			} catch (error) {
				console.error('QnA 데이터 로딩 중 오류 발생:', error);
			}
		};

		loadData();
	}, []);

	const handleRowClick = qna => {
		setSelectedQna(qna);
		setIsModalOpen(true);
	};

	const handleAnswerSubmit = async (answer, qnaId) => {
		try {
			await qnaMailing(); // 메일 발송 API 호출
			setQnaList(
				qnaList.map(item => (item.id === qnaId ? { ...item, isCompleted: '처리' } : item)),
			);
			setIsModalOpen(false);
		} catch (error) {
			console.error('답변 등록 및 메일 발송 실패:', error);
		}
	};

	return (
		<>
			<Container>
				<TableTitle>신고내역 처리</TableTitle>
				<Table>
					<TableHead>
						<TableRow>
							<TableHeader>질문자 ID</TableHeader>
							<TableHeader>글 제목</TableHeader>
							<TableHeader>작성일자</TableHeader>
							<TableHeader>글 내용</TableHeader>
							<TableHeader>답변여부</TableHeader>
						</TableRow>
					</TableHead>
					<TableBody>
						{qnaList.map(qna => (
							<TableRow key={qna.id} onClick={() => handleRowClick(qna)}>
								<TableCell>{qna.nickname}</TableCell>
								<TableCell>{qna.title}</TableCell>
								<TableCell>{DateSlicer(qna.createdAt)}</TableCell>
								<TableCell>{qna.content}</TableCell>
								<TableCell>
									<ReportProcess>{qna.isCompleted}</ReportProcess>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				{/* <PaginationContainer>
					<Paginator
						currentPage={currentPage}
						totalItems={totalItems}
						itemsCountPerPage={perPage}
						onChange={handlePageChange}
					/>
				</PaginationContainer> */}
			</Container>
			{selectedQna && (
				<AdminModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					qna={selectedQna}
					onAnswer={handleAnswerSubmit}
				/>
			)}
		</>
	);
}

export default AdminQnA;

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
		cursor: ${props => (props.processed ? 'default' : 'pointer')};
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

// const PaginationContainer = styled.div`
// 	padding-top: 20px;
// 	text-align: center;
// `;
