import React from 'react';
import CommuWrite from '../../components/pages/Community/CommunityWrite';
import CommuEddit from '../../components/pages/Community/CommunityEddit';
import { useParams } from 'react-router-dom';

function CommunityWrite() {
	const { id } = useParams();
	return <>{id === undefined ? <CommuWrite /> : <CommuEddit id={id} />}</>;
}

export default CommunityWrite;
