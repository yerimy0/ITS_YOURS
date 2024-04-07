import { UpdateTitle, Box2, Container, Border, Title } from '../HomeStyle';

function Section4() {
	return (
		<Box2>
			<UpdateTitle>이제너해's 추천 도서</UpdateTitle>
			<div className="BookShelf">
				<Container>
					<Title>
						<div>인공지능을 위한 머신러닝과 딥러닝</div>
						<div></div>
					</Title>
				</Container>
				<Border src="./border.png" />
				<Container></Container>
			</div>
		</Box2>
	);
}

export default Section4;
