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

import { ListTitle } from '../CommunityList/CommunityStyle';
import { useNavigate } from 'react-router-dom';
import DateSlicer from '../../../../utils/dateSlicer';
import { DeleteCommunnity } from '../../../../apis/service/community.api';

function DetailTopSection({ detail }) {
	const navigate = useNavigate();

	async function onClickDelete() {
		await DeleteCommunnity(detail._id);
		navigate('/community');
	}
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
					<Button onClick={onClickDelete}>삭제</Button>
					<Red>신고하기</Red>
				</Buttons>
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
