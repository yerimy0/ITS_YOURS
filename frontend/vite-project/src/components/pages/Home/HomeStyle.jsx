import styled from 'styled-components';

// section1
const Box1 = styled.section`
	display: block;
	position: relative;
	width: 100%;
	height: 600px;
	margin-bottom: 50px;

	.blurEffect {
		position: absolute;
		top: 0%;
		left: 0;
		width: 100%;
		height: 98%;
		background-color: #b1e9f8;
		z-index: 0;
		-webkit-mask-image: linear-gradient(to top, transparent, black);
		mask-image: linear-gradient(to top, transparent, white);
	}

	.sec1_wrap {
		position: relative;
		z-index: 1;
	}
	img {
		display: block;
		width: 100%;
	}

	.img1 {
		animation: bounce 1s 3;

		max-width: 300px;
		position: absolute;
		top: 50%;
		left: 5%;
		transform: translateY(-50%);
		z-index: 1;
	}
	@keyframes bounce {
		0%,
		100% {
			transform: translateY(-50%);
		}
		50% {
			transform: translateY(-40%);
		}
	}

	.img2 {
		animation: bounce 1s 3;
		max-width: 300px;
		position: absolute;
		top: 50%;
		right: 5%;
		transform: translateY(-50%);
	}
`;

const Title = styled.div`
	display: block;
	position: relative;
	z-index: 3;
	text-align: center;
	padding: 210px 0;

	.sec1_text {
		font-size: 24px;
		margin-bottom: 50px;
		line-height: 40px;
	}
`;

const Slogan = styled.p`
	font-size: 18px;
	font-weight: 400;
`;

const TitleName = styled.p`
	font-size: 30px;
	font-weight: 700;
	margin-top: 10px;
	display: block;
`;

// section2
const Box2 = styled.div`
	margin-bottom: 150px;
`;

// sec3
const Box3 = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: #b1e9f8;
	padding: 90px 0;
	margin-bottom: 100px;

	.sec3_title {
		display: block;
		text-align: center;
		margin: 0;
		padding: 90px 0;
		font-weight: 500;
	}
`;

const UpdateBooks = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5%;
	margin-top: 15px;

	div {
		display: block;
		margin-top: 30px;
		// max-width: 225px;
	}

	.sec2_img {
		width: 172px;
		height: 252px;
		object-fit: cover;
		// background-color: #000;
		box-shadow:
			0 10px 20px rgba(0, 0, 0, 0.19),
			0 6px 6px rgba(0, 0, 0, 0.23);
	}

	.sec3_img {
		width: 172px;
		height: 252px;
		object-fit: cover;
		// background-color: #000;
		box-shadow:
			0 10px 20px rgba(0, 0, 0, 0.19),
			0 6px 6px rgba(0, 0, 0, 0.23);
	}
`;

const UpdateTitle = styled.div`
	display: block;
	font-size: 26px;
	font-weight: 500;
	margin-top: 100px;
	margin-bottom: 30px;
`;

const ButtonBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-top: 25px;

	.sec3_button {
		padding: 10px 25px;
		border-radius: 25px;
		border: 2px solid #009dff;
		background: #fff;
		color: #009dff;
	}
`;

const Button = styled.button`
	display: block;
	padding: 10px 25px;
	box-sizing: border-box;
	border-radius: 25px;
	color: #fff;
	background: #009dff;
	border: 0;
`;

const Img = styled.img`
display: block;
	width: 100%;a(0, 0, 0.25);
`;

const SchoolBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5%;
	flex-wrap: wrap;
`;

const Icon = styled.img`
	display: flex;
	width: 97px;
	flex-direction: column;
	align-items: center;
	gap: 9px;
	&:hover {
		transform: scale(1.1);
		transition: transform 0.3s ease;
	}
`;

const BookInfo = styled.div`
	display: block;
	margin-top: 10px;
	font-size: 16px;

	&::last-child {
		margin-top: 5px;
	}
`;

const PRCOntainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
`;

const PRContent = styled.div`
	width: 80%;
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 30px 45px;
	box-sizing: border-box;
	background: #f2fdff;
	border-radius: 15px;
	margin-top: 50px;
`;

const EachInfo = styled.div`
	display: flex;
	width: 146px;
	// height: 200px;
	flex-direction: column;
	align-items: center;
	gap: 0;
	justify-content: flex-end;
`;

const SmallIcon = styled.img`
	display: block;
	margin: 0 auto 50px auto;
`;

const SmallTitle = styled(Title)`
	display: block;
	font-size: 16px;
	color: #666;
	text-align: center;
	margin-top: 30px;
	margin-bottom: 20px;
`;

const CountNum = styled.p`
	font-size: 45px;
	font-style: normal;
	font-weight: 800;
	margin-right: 11px;
`;

const Unit = styled.div`
	font-size: 32px;
	font-weight: 800;
	display: flex;
	p {
		text-align: center;
		display: block;
		font-size: 26px;
	}
`;

const Box4 = styled.div`
	display: block;
	padding: 100px 0;
	width: 100%;
	padding: 0;
	margin: 0 0 150px 0;

	.sec4_title {
		display: block;
		text-align: center;
	}

	${Title} {
		padding: 0;
		margin: 0;
	}

	${TitleName} {
		display: block;
		font-size: 32px;
		font-weight: 700;
		margin-bottom: 20px;
	}

	${Slogan} {
		font-size: 18px;
		font-weight: 400;
	}
`;
export {
	Box1,
	Title,
	Slogan,
	TitleName,
	Box2,
	UpdateBooks,
	UpdateTitle,
	Button,
	ButtonBox,
	Img,
	SchoolBox,
	Icon,
	Box3,
	BookInfo,
	Box4,
	PRCOntainer,
	PRContent,
	EachInfo,
	SmallIcon,
	SmallTitle,
	CountNum,
	Unit,
};
