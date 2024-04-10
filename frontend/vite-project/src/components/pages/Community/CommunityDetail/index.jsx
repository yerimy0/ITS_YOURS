import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Line } from '../CommunityList/CommunityStyle';
import { DetailBox, Content, ContentBox } from './DetailStyle';

import CommentSection from '../components/Comment';
import DetailTopSection from '../components/DetailTop';

function CommuDetail() {
	const { id } = useParams();
	return (
		<DetailBox>
			<DetailTopSection />
			<ContentBox>
				<Content>교수님 휴강 휴강 휴강 제발 휴강 갑자기 일 생겨서 휴강 해줘요</Content>
			</ContentBox>
			<img src="/ex_pic.png" />
			<Line>
				<hr />
			</Line>
			<CommentSection />
		</DetailBox>
	);
}

export default CommuDetail;
