import React, { useEffect, useState } from 'react';
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
import { GetCommunnityList } from '../../../../apis/service/community.api';
import detailDate from '../../../../utils/writeTime';
import Paginator from '../../../Paginator';

function CommuList() {
	const navigate = useNavigate();
	const [communityLists, setCommunityLists] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [itemsPerPage] = useState(10);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		async function GetData() {
			const datas = await GetCommunnityList();
			setCommunityLists(datas);
			setTotalItems(datas.length);
		}
		GetData();
	}, []);

	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentCommunityLists = communityLists.slice(startIndex, endIndex);

	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0 });
	};

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
					{currentCommunityLists.map((commu, i) => (
						<ListOne key={`list-item-${i}`} commu={commu} />
					))}
				</List>
			</div>
			<Paginator
				currentPage={currentPage}
				totalItems={totalItems}
				itemsCountPerPage={itemsPerPage}
				onChange={handlePageChange}
			/>
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
					<ListSub className="listsub">{commu.commentCounts}</ListSub>
				</Comment>
				<Img className="comm_list_img" src={commu.photos}></Img>
			</ListRight>
		</ListOfOne>
	);
}

export default CommuList;
