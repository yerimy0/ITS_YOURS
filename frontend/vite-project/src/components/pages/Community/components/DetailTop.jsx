import {
	DetailTop,
	TitleBox,
	Buttons,
	Button,
	Red,
	UserImg,
	Profile,
	UsernDate,
	Writer,
	Date,
} from '../CommunityDetail/DetailStyle';

import { useState } from 'react';
import { ListTitle } from '../CommunityList/CommunityStyle';
import { useNavigate } from 'react-router-dom';
import DateSlicer from '../../../../utils/dateSlicer';
import { DeleteCommunnity } from '../../../../apis/service/community.api';
import Modal from '../../../Modal';

function DetailTopSection({ detail }) {
	const [modalOpen, setModalOpen] = useState(false); // 삭제 관련 모달 표시 여부

	const navigate = useNavigate();

	//커뮤니티 게시글 삭제
	async function onClickDelete() {
		await DeleteCommunnity(detail._id);
		setModalOpen(false);
		navigate('/community');
	}

	const handleOpenModal = () => setModalOpen(true);
	const handleCloseModal = () => setModalOpen(false);

	const date = DateSlicer(detail.createdAt);
	return (
		<DetailTop>
			<TitleBox>
				<ListTitle>
					<h3>{detail.title}</h3>
				</ListTitle>
				<Buttons>
					<Button
						onClick={() => {
							navigate(`/community/edit/${detail._id}`);
						}}
					>
						수정
					</Button>
					<Button onClick={handleOpenModal}>삭제</Button>
					<Red>신고하기</Red>
				</Buttons>
				{modalOpen && (
					<Modal
						isOpen={handleOpenModal}
						onClose={handleCloseModal}
						title="게시글 삭제"
						content="게시글을 정말 삭제하시겠습니까?"
						confirmText="삭제"
						onConfirm={onClickDelete}
					/>
				)}
			</TitleBox>
			<Profile>
				<UserImg src={detail.profilePic}></UserImg>
				<UsernDate>
					<Writer>{detail.nickName}</Writer>
					<Date>{date}</Date>
				</UsernDate>
			</Profile>
		</DetailTop>
	);
}

export default DetailTopSection;
