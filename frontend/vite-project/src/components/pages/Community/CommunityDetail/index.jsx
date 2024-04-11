import { useParams } from 'react-router-dom';
import { Line } from '../CommunityList/CommunityStyle';
import { DetailBox, Content, ContentBox } from './DetailStyle';

import CommentSection from '../components/Comment';
import DetailTopSection from '../components/DetailTop';

import { GetDetail } from '../../../../apis/service/community.api';
import { useState, useEffect } from 'react';

function CommuDetail() {
	const { id } = useParams();
	const [detail, setDeatil] = useState([]);
	useEffect(() => {
		async function GetPape() {
			const res = await GetDetail(id);
			setDeatil(res);
		}
		GetPape();
	}, []);
	return (
		<DetailBox>
			<DetailTopSection detail={detail} />
			<ContentBox>
				<Content>{detail.content}</Content>
			</ContentBox>
			<img src={detail.photos} />
			<Line>
				<hr />
			</Line>
			<CommentSection id={id} />
		</DetailBox>
	);
}

export default CommuDetail;
