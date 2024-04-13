import React, { useState } from 'react';
import ReportModal from './ReportModal';
import ToastPopup from '../../TostPopUp';
import Modal from '../../Modal';
import { MenuButton, Img, Menu, MenuItem } from './ChatRoomHeaderStyle';

function MenuButtonComponent() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [reportModalOpen, setReportModalOpen] = useState(false);
	const [toastMessage, setToastMessage] = useState(''); // 토스트 메시지 상태 추가
	const [blockUserModalOpen, setBlockUserModalOpen] = useState(false); // 사용자 차단 모달 상태 추가
	const [leaveRoomModalOpen, setLeaveRoomModalOpen] = useState(false); // 채팅방 나가기 모달 상태 추가

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const openReportModal = () => {
		setReportModalOpen(true);
	};

	const closeReportModal = () => {
		setReportModalOpen(false);
	};

	const handleBlockUser = () => {
		setBlockUserModalOpen(true);
	};

	const handleLeaveRoom = () => {
		setLeaveRoomModalOpen(true);
	};

	const handleCloseModal = () => {
		setBlockUserModalOpen(false);
		setLeaveRoomModalOpen(false);
	};

	const handleToastMessage = message => {
		setToastMessage(message);
		setTimeout(() => {
			setToastMessage('');
		}, 3000); // 3초 후에 토스트 메시지 초기화
	};

	return (
		<>
			<MenuButton onClick={toggleMenu}>
				<Img src="./menu_bar.svg" />
				<Menu open={menuOpen}>
					<MenuItem onClick={() => handleToastMessage('카페인 줄여야지님에게 칭찬하였습니다.')}>
						매너 칭찬하기
					</MenuItem>
					<MenuItem onClick={() => handleToastMessage('카페인 줄여야지님에게 비판하였습니다.')}>
						매너 비판하기
					</MenuItem>
					<MenuItem onClick={handleBlockUser}>차단하기</MenuItem>
					<MenuItem onClick={openReportModal}>신고하기</MenuItem>
					<MenuItem onClick={handleLeaveRoom}>채팅방 나가기</MenuItem>
				</Menu>
			</MenuButton>
			<ReportModal isOpen={reportModalOpen} onClose={closeReportModal} />
			{toastMessage && <ToastPopup message={toastMessage} />}
			<Modal
				isOpen={blockUserModalOpen}
				onClose={handleCloseModal}
				title="00님을 차단하시겠습니까?"
				content=<>
					차단하면 00님의 게시글은 보이지 않고,
					<br />
					나에게 댓글과 채팅도 보낼 수 없어요. 차단하시겠어요?
				</>
				confirmText="차단하기"
				onConfirm={handleCloseModal}
			/>
			<Modal
				isOpen={leaveRoomModalOpen}
				onClose={handleCloseModal}
				title="채팅방을 나가시겠습니까?"
				content=<>
					채팅방을 떠나시면 모든 대화 기록이 사라집니다.
					<br />
					정말로 나가시겠어요?
				</>
				confirmText="나가기"
				onConfirm={handleCloseModal}
			/>
		</>
	);
}

export default MenuButtonComponent;
