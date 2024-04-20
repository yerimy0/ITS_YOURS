import React, { useState } from 'react';
import styled from 'styled-components';
import AdminReport from '../../components/Admin/AdminReport';
import AdminQna from '../../components/Admin/AdminQnA';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
	const [activeNav, setActiveNav] = useState('report');
	const navigate = useNavigate();

	const renderContent = () => {
		switch (activeNav) {
			case 'report':
				return <AdminReport />;
			case 'qa':
				return <AdminQna />;
			default:
				return;
		}
	};

	return (
		<AdminLayout>
			<HeaderBar>
				<NavLogo src="/main_logo.png" alt="Logo" onClick={() => navigate('/')} />
				<Header>안녕하세요 관리자님👋🏼,</Header>
			</HeaderBar>
			<ContentArea>
				<AdminNavBar>
					<NavItem onClick={() => setActiveNav('report')} active={activeNav === 'report'}>
						신고내역 처리
					</NavItem>
					<NavItem onClick={() => setActiveNav('qa')} active={activeNav === 'qa'}>
						Q&A처리
					</NavItem>
				</AdminNavBar>
				<MainContent>{renderContent()}</MainContent>
			</ContentArea>
		</AdminLayout>
	);
}

export default AdminPage;

const AdminLayout = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const AdminNavBar = styled.nav`
	/* min-height: 70; */
	width: 200px;
	padding: 20px;
`;

const NavLogo = styled.img`
	width: 200px;
	height: 80px;
	&:hover {
		cursor: pointer;
	}
`;

const NavItem = styled.div`
	cursor: pointer;
	text-align: center;
	margin-bottom: 20px;
	border-radius: 10px;
	padding: 10px;
	background-color: ${props => (props.active ? '#007bff' : '')};
	color: ${props => (props.active ? 'white' : 'black')};
`;

const ContentArea = styled.div`
	display: flex;
	flex: 1;
	@media (max-width: 900px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const MainContent = styled.main`
	flex-grow: 1;
	padding: 20px;
`;

const HeaderBar = styled.header`
	background-color: #fff;
	padding: 0 20px;
	display: flex;
	align-items: center;

	@media (max-width: 900px) {
		flex-direction: column;
		align-items: flex-start;
	}
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
	@media (max-width: 900px) {
		margin: 0;
		padding: 0 0 20px 14px;
	}
`;
