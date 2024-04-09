import {
	Line,
	Box,
	ListOfOne,
	LeftBottom,
	ListTitle,
	ListSub,
	ListLeft,
	MainTitle,
	List,
	ButtonBox,
	Img,
	ListRight,
	Comment,
} from '../CommunityStyle';
import { Button } from '../CommunityStyle';
import { FaComments } from 'react-icons/fa';
import commus from './data';

function CommuList() {
	return (
		<Box>
			<ButtonBox>
				<Button>새글 등록</Button>
			</ButtonBox>
			<Line>
				<hr />
			</Line>
			<List>
				{commus.map((commu, i) => (
					<ListOne key={`list-item-${i}`} commu={commu} />
				))}
			</List>
		</Box>
	);
}

function ListOne({ commu }) {
	return (
		<ListOfOne>
			<ListLeft>
				<ListTitle>{commu.title}</ListTitle>
				<ListSub>{commu.content}</ListSub>
				<LeftBottom>
					<ListSub>{commu.school}</ListSub>
					<ListSub>{commu.time}</ListSub>
				</LeftBottom>
			</ListLeft>
			<ListRight>
				<Comment>
					<FaComments />
					<ListSub>{commu.comment}</ListSub>
				</Comment>
				<Img src={commu.img}></Img>
			</ListRight>
		</ListOfOne>
	);
}

export default CommuList;
