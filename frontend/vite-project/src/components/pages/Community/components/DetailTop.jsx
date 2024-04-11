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
import DateSlicer from '../../../../utils/dateSlicer';

function DetailTopSection({ detail }) {
	const date = DateSlicer(detail.createdAt);
	return (
		<DetailTop>
			<TitleBox>
				<ListTitle>
					<h3>{detail.title}</h3>
				</ListTitle>
				<Buttons>
					<Button>수정</Button>
					<Button>삭제</Button>
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
