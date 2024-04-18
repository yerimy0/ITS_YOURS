import React, { useState, useEffect } from 'react';
import { fetchQnaData, qnaMailing } from '../../apis/service/AdminQnaApi';
import styled from 'styled-components';
import Paginator from '../Paginator';
import AdminModal from './AdminModal';
import DateSlicer from '../../utils/dateSlicer';

function AdminQnA() {
	const [qnaList, setQnaList] = useState([]);
	const [selectedQna, setSelectedQna] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState(0);
	const itemsPerPage = 10;

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

	const handlePageChange = newPage => {
		setCurrentPage(newPage);
	};

	const paginatedQnaList = qnaList.slice(
		currentPage * itemsPerPage,
		(currentPage + 1) * itemsPerPage,
	);

	const onAnswerSubmit = (answer, qnaId) => {
		if (!qnaId) {
			console.error('QnA ID를 찾지못했습니다 그러므로 메일을 보내지못했슴둥.');
			alert('서버오류가 발생했습니다. 다시 시도해주세요');
			return;
		}
		console.log('QnA ID에 대해 제출된 답변:', qnaId);
		qnaMailing(qnaId, answer)
			.then(() => {
				console.log('메일이 성공적으로 전송되었습니다.');
			})
			.catch(error => {
				console.error('답변 제출 및 이메일 전송 실패:', error);
			});
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
						{paginatedQnaList.map(qna => (
							<TableRow key={qna._id} onClick={() => handleRowClick(qna)}>
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
				<PaginationContainer>
					<Paginator
						totalItems={qnaList.length}
						itemsCountPerPage={itemsPerPage}
						currentPage={currentPage}
						onChange={handlePageChange}
					/>
				</PaginationContainer>
			</Container>
			{selectedQna && (
				<AdminModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					qna={selectedQna}
					onAnswer={answer => onAnswerSubmit(answer, selectedQna._id)}
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

const PaginationContainer = styled.div`
	padding-top: 20px;
	text-align: center;
`;
