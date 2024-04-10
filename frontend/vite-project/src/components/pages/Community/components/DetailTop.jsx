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

function DetailTopSection() {
	return (
		<DetailTop>
			<TitleBox>
				<ListTitle>
					<h3>교수님 내일 휴강 해줘요</h3>
				</ListTitle>
				<Buttons>
					<Button>수정</Button>
					<Button>삭제</Button>
					<Red>신고하기</Red>
				</Buttons>
			</TitleBox>
			<Profile>
				<UserImg src="/main_character.png"></UserImg>
				<UsernDate>
					<Writer>김아무개</Writer>
					<Date>2024.04.01</Date>
				</UsernDate>
			</Profile>
		</DetailTop>
	);
}

export default DetailTopSection;
