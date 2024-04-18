import React, { useState, useEffect } from 'react';
import { fetchQnaData, qnaMailing } from '../../apis/service/AdminQnaApi';
import Paginator from '../Paginator';
import AdminModal from './AdminModal';
import DateSlicer from '../../utils/dateSlicer';
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
} from './AdminQnaStyle';

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
				setQnaList(
					data.map(item => ({
						...item,
						isCompleted:
							item.isCompleted === null || item.isCompleted === undefined
								? '미처리'
								: item.isCompleted,
					})),
				);
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
									<ReportProcess isCompleted={qna.isCompleted}>
										{qna.isCompleted === '미처리' ? '미처리' : qna.isCompleted ? '처리' : '미처리'}
									</ReportProcess>
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
