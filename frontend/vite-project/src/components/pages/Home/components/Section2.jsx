import { Box2, UpdateBooks, UpdateTitle, Button, ButtonBox, Img } from '../HomeStyle';
import SearchBar from '../../../../components/SearchBar';
import { pics } from './data';
import { useNavigate } from 'react-router-dom';

function Section2() {
	const navigate = useNavigate();

	function OnClick() {
		navigate('/product');
	}
	return (
		<Box2>
			<SearchBar />
			<div className="UpdateSection">
				<UpdateTitle>방금 올라온 도서</UpdateTitle>
				<UpdateBooks>
					{pics.map((pic, i) => (
						<Img key={`List-item-${i}`} src={`./${pic}`} alt={`Book ${i}`} />
					))}
				</UpdateBooks>
				<ButtonBox>
					<Button onClick={OnClick}>더보기</Button>
				</ButtonBox>
			</div>
		</Box2>
	);
}

export default Section2;
