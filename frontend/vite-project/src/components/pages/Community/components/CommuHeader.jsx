import {
	Box,
	HeaderTitle,
	HeaderTitleBlue,
	MainTitle,
	HeaderTop,
	Line,
	HeaderLeft,
} from '../CommunityStyle';

function CommuHeader() {
	return (
		<Box>
			<HeaderTop>
				<HeaderLeft>
					<MainTitle>
						<HeaderTitle>이거</HeaderTitle>
						<HeaderTitleBlue>너:</HeaderTitleBlue>
						<HeaderTitle>해</HeaderTitle>
					</MainTitle>
					<HeaderTitle>커뮤니티</HeaderTitle>
					<p>이제너해에서 다양한 사람을 만나고 생각의 폭을 넓혀보세요.</p>
				</HeaderLeft>
				<img src="/main_character.png"></img>
			</HeaderTop>
			<Line>
				<hr />
			</Line>
		</Box>
	);
}

export default CommuHeader;
