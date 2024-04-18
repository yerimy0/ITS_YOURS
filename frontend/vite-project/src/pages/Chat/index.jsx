import ChatWrap from './ChatStyle';
import ChatList from '../../components/pages/Chat/ChatList';
import DefaultChatRoom from '../../components/pages/Chat/DefaultChatRoom';
import ChatRoom from '../../components/pages/Chat/ChatRoom';
import { useNavigate } from 'react-router-dom';
import UserIdContext from '../../context/UserIdContext';
import { useContext, useEffect } from 'react';

function Chat() {
	const { id } = useContext(UserIdContext);
	const navigate = useNavigate();

	useEffect(() => {
		console.log(id);
		if (id == '') navigate('/login');
	}, []);

	return (
		<ChatWrap>
			<div className="chat_inner">
				<ChatList />
				{/* <DefaultChatRoom /> */}
				<ChatRoom />
			</div>
		</ChatWrap>
	);
}

export default Chat;
