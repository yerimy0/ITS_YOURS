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
} from '../CommunityList/CommunityStyle';
import { useNavigate } from 'react-router-dom';
import { Button } from '../CommunityList/CommunityStyle';
import { FaComments } from 'react-icons/fa';
import { commus } from './data';

function CommuList() {
	const navigate = useNavigate();
	return (
		<Box>
			<ButtonBox
				onClick={() => {
					navigate('/community/write');
				}}
			>
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
	const navigate = useNavigate();
	return (
		<ListOfOne
			onClick={() => {
				console.log(1);
				navigate(`/community/${commu.id}`);
			}}
		>
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
