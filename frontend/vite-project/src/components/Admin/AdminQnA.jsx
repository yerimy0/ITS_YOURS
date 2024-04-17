import React, { useState, useEffect, useContext } from 'react';
import { fetchQnaData, handleAnswerSubmit } from '../../apis/service/AdminQnaApi';
import styled from 'styled-components';
import Paginator, { PaginatorContext } from '../Paginator';
import AdminModal from './AdminModal';

function AdminQnA() {
	const perPage = 10;
	const { currentPage } = useContext(PaginatorContext);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedQna, setSelectedQna] = useState(null);
	const [qnaList, setQnaList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		fetchQnaData(currentPage, perPage, setIsLoading, setQnaList, setError);
	}, [currentPage, perPage]);

	return (
		<>
			<Container>
				<TableTitle>신고내역 처리</TableTitle>
				{isLoading ? (
					<p>데이터 로딩중...</p>
				) : error ? (
					<p>{error}</p>
				) : (
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
							{qnaList.length > 0 ? (
								qnaList.map(qna => (
									<TableRow key={qna.id}>
										<TableCell>{qna.nickname}</TableCell>
										<TableCell>{qna.title}</TableCell>
										<TableCell>{qna.createdAt}</TableCell>
										<TableCell>{qna.content}</TableCell>
										<TableCell>
											<ReportProcess>{qna.iscompleted}</ReportProcess>
										</TableCell>
									</TableRow>
								))
							) : (
								<TableRow>
									<TableCell colSpan="5">No data available</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				)}
				<PaginationContainer>
					<Paginator totalItems={qnaList.length} perPage={perPage} />
				</PaginationContainer>
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

const PaginationContainer = styled.div`
	padding-top: 20px;
	text-align: center;
`;
