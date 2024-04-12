import styled from 'styled-components';

const Box1 = styled.section`
	background-image: url('/background.png');
	background-size: contain;
	width: auto;
	height: auto;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	align-content: center;
	row-gap: 20px;
	flex-wrap: wrap;
`;

const Title = styled.div`
	color: var(--M3-black, #000);
	align-content: center;
	align-self: stretch;
	text-align: center;
	font-family: SUIT;
	font-style: normal;
	font-size: 32px;
	line-height: 40px; /* 125% */

	.Sub {
		font-size: 20px;
	}
`;

const Slogan = styled.p`
	font-weight: 400;
	margin: 0 0;
`;

const TitleName = styled.p`
	font-weight: 700;
	margin: 10px 0;
`;

const Box2 = styled.section`
	width: 100%;
	height: 750px;
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
	align-content: space-around;
	justify-content: space-evenly;
`;
const Box3 = styled(Box2)`
	background: var(--light_blue, #b1e9f8);
	backdrop-filter: blur(2px);
`;

const UpdateBooks = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	gap: 55px;
	align-self: stretch;
	flex-wrap: wrap;
	align-items: flex-end;
`;

const UpdateTitle = styled.div`
	color: #000;
	font-family: SUIT;
	font-size: 30px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;

const ButtonBox = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 30px 0;
`;

const Button = styled.button`
	display: flex;
	width: 97px;
	height: 31px;
	padding: 6px 16px;
	justify-content: center;
	gap: 10px;

	border-radius: 20px;
	border: 3px solid #009dff;
	background: #009dff;
	color: #fff;
	font-size: 15px;
	font-weight: 700;
	line-height: normal;
`;

const Img = styled.img`
	background: lightgray 50% / cover no-repeat;
	box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.25);
	width: 203px;
	height: 238px;
`;

const SchoolBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 40px;
	row-gap: 40px;
	column-gap: 40px;
	align-self: stretch;
	justify-content: center;
`;

const Icon = styled.img`
	display: flex;
	width: 97px;
	flex-direction: column;
	align-items: center;
	gap: 9px;
`;

const BookInfo = styled.div`
	color: #000;
	font-family: SUIT;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

const Line = styled.div`
	width: 700px;
	height: 1px;
`;

const PRCOntainer = styled.div`
	width: 1100px;
	height: 400px;
	display: flex;

	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
	border-radius: 40px;
	background: #f2fdff;
`;

const PRContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	gap: 20px;
	align-self: stretch;
	flex-wrap: wrap;
	margin: 90px;
`;

const EachInfo = styled.div`
	display: flex;
	width: 209px;
	height: 200px;
	flex-direction: column;
	align-items: center;
	gap: 0;
	justify-content: flex-end;
}
`;

const SmallIcon = styled.img`
	width: 100px;
`;

const SmallTitle = styled(Title)`
	font-size: 15px;
	color: #666;
`;

const CountNum = styled.p`
	font-size: 45px;
	font-style: normal;
	font-weight: 800;
	margin-right: 11px;
`;

const Unit = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
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
	Line,
	PRCOntainer,
	PRContent,
	EachInfo,
	SmallIcon,
	SmallTitle,
	CountNum,
	Unit,
};
