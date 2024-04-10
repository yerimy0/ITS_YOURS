import React from 'react';
import CommuWrite from '../../components/pages/Community/CommunityWrite';
import { useParams } from 'react-router-dom';

function CommunityWrite() {
	const { id } = useParams();
	return <>{id === undefined ? <CommuWrite /> : <CommuWrite />}</>;
}

export default CommunityWrite;
