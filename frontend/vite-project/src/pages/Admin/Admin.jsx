import React, { useState } from 'react';
import styled from 'styled-components';

function AdminReport() {
	const data = [
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
			detail: '사기가 의심돼요.',
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
			detail: '사기가 의심돼요.',
			Process: '처리',
		},
		// ...추가 데이터
	];

	const [activeNav, setActiveNav] = useState('report');

	return (
		<AdminLayout>
			<HeaderBar>
				<NavLogo src="./main_logo.png" alt="" />
				<Header>안녕하세요 관리자님</Header>
			</HeaderBar>
			<CoutentArea>
				<AdminNavBar>
					<NavItem onClick={() => setActiveNav('report')} active={activeNav === 'report'}>
						신고내역 처리
					</NavItem>
					<NavItem onClick={() => setActiveNav('qa')} active={activeNav === 'qa'}>
						Q&A처리
					</NavItem>
				</AdminNavBar>
				<MainContent>
					<Container>
						<TableTitle>신고 내역 처리</TableTitle>
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
								{data.map((item, index) => (
									<TableRow key={index}>
										<TableCell>{item.id}</TableCell>
										<TableCell>{item.title}</TableCell>
										<TableCell>{item.date}</TableCell>
										<TableCell>{item.detail}</TableCell>
										<TableCell>
											<ReportProcess>{item.Process}</ReportProcess>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
						<PaginationContainer>
							{/* Implementing active page logic here */}
							{[1, 2, 3, '...', 10].map((pageNum, index) => (
								<PageNumber key={index} active={pageNum === 1}>
									{pageNum}
								</PageNumber>
							))}
						</PaginationContainer>
					</Container>
				</MainContent>
			</CoutentArea>
		</AdminLayout>
	);
}

export default AdminReport;

const AdminNavBar = styled.nav`
	min-height: 100vh;
	width: 200px;
	padding: 20px;
`;

const NavLogo = styled.img`
	width: 200px;
	height: 120px;
`;

const NavItem = styled.div`
	cursor: pointer;
	border-radius: 10px;
	font-family: 'Noto Sans KR';
	margin: 10px;
	padding: 10px;
	background-color: ${props => (props.active ? '#007bff' : '')};
	color: ${props => (props.active ? 'white' : 'black')};
`;

const AdminLayout = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const CoutentArea = styled.div`
	display: flex;
	flex: 1;
`;

const MainContent = styled.main`
	flex-grow: 1;
	padding: 20px;
`;

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

const HeaderBar = styled.header`
	background-color: #fff;
	padding: 0 20px;
	display: flex;
	align-items: center;
`;

const Header = styled.p`
	margin: 0;
	padding-bottom: 20px;
	text-align: left;
	font-family: suit;
	font-size: 24px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	margin-left: 100px;
	margin-top: 50px;
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

const ReportProcess = styled.span`
	color: var(--accept_blue, #005ab7);
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

const PageNumber = styled.button`
	cursor: pointer;
	padding: 5px 10px;
	margin: 0 5px;
	font-family: suit;
	border: 0px;
	border-radius: 5px;
	background: ${props => (props.active ? '#blue' : '#88888833')};
	color: ${props => (props.active ? '#000' : '#000')};
`;
