import {
	Box,
	ListOfOne,
	LeftBottom,
	ListTitle,
	ListSub,
	ListLeft,
	List,
	ButtonBox,
	Img,
	ListRight,
	Comment,
} from '../CommunityList/CommunityStyle';
import { useNavigate } from 'react-router-dom';
import { Button } from '../CommunityList/CommunityStyle';
// import { FaComments } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { GetCommunnityList } from '../../../../apis/service/community.api';
import detailDate from '../../../../utils/writeTime';

function CommuList() {
	const navigate = useNavigate();
	const [communityLists, setCommunityLists] = useState([]);

	useEffect(() => {
		async function GetData() {
			const datas = await GetCommunnityList();
			console.log(datas);
			setCommunityLists(datas);
		}
		GetData();
	}, []);
	console.log(communityLists);
	return (
		<Box>
			<div className="comm_list_wrap">
				<ButtonBox
					onClick={() => {
						navigate('/community/write');
					}}
				>
					<Button>새글 등록</Button>
				</ButtonBox>

				<List>
					{communityLists.map((commu, i) => (
						<ListOne key={`list-item-${i}`} commu={commu} />
					))}
				</List>
			</div>
		</Box>
	);
}

function ListOne({ commu }) {
	const navigate = useNavigate();
	const time = detailDate(commu.createdAt);
	return (
		<ListOfOne
			onClick={() => {
				navigate(`/community/${commu._id}`);
			}}
		>
			<ListLeft>
				<ListTitle>{commu.title}</ListTitle>
				<ListSub>{commu.content}</ListSub>
				<LeftBottom>
					<ListSub>{commu.schoolName}</ListSub>
					<ListSub>{time}</ListSub>
				</LeftBottom>
			</ListLeft>
			<ListRight>
				<Comment>
					<img className="comment_icon" src="/comment_i.png" alt="" />
					{/* <FaComments /> */}
					<ListSub>{commu.commentCounts}</ListSub>
				</Comment>
				<Img className="comm_list_img" src={commu.photos}></Img>
			</ListRight>
		</ListOfOne>
	);
}

export default CommuList;
