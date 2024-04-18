import {
	Box,
	HeaderTitle,
	HeaderTitleBlue,
	MainTitle,
	HeaderTop,
	HeaderLeft,
} from '../CommunityList/CommunityStyle';

function CommuHeader() {
	return (
		<Box>
			<div className="comm_inner">
				<HeaderTop>
					<HeaderLeft>
						<MainTitle>
							<HeaderTitle>이제</HeaderTitle>
							<HeaderTitleBlue>너:</HeaderTitleBlue>
							<HeaderTitle>해</HeaderTitle>
						</MainTitle>
						<HeaderTitle>커뮤니티</HeaderTitle>
						<h5>이제너해에서 다양한 사람을 만나고 생각의 폭을 넓혀보세요.</h5>
					</HeaderLeft>
					<img className="header_logo" src="/main_character.png"></img>
				</HeaderTop>
			</div>
		</Box>
	);
}

export default CommuHeader;
