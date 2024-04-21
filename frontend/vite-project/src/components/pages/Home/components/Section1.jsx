import { Box1, Title, Slogan, TitleName } from '../HomeStyle';

function Section1() {
	return (
		<Box1>
			<div className="blurEffect"></div>
			<div className="sec1_wrap">
				<img src="./map_icon.png" className="img1"></img>
				<Title>
					<Slogan className="sec1_text">
						한 학기만 쓰고 버리는 전공책이
						<br />
						이제는 아깝지 않도록
					</Slogan>
					<TitleName>대학 전공서적 중고거래 플랫폼: 이제너해</TitleName>
				</Title>
				<img src="./book_icon.png" className="img2"></img>
			</div>
		</Box1>
	);
}

export default Section1;
