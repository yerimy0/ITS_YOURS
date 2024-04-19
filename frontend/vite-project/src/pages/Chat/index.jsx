import ChatWrap from './ChatStyle';
import ChatList from '../../components/pages/Chat/ChatList';
import DefaultChatRoom from '../../components/pages/Chat/DefaultChatRoom';
import ChatRoom from '../../components/pages/Chat/ChatRoom';
import { useNavigate } from 'react-router-dom';
import UserIdContext from '../../context/UserIdContext';
import { createContext, useContext, useEffect, useState } from 'react';

export const ClickedChatContext = createContext();

function Chat() {
	const { id } = useContext(UserIdContext);
	const [clickedChatroom, setClickedChatroom] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		console.log(id);
		if (id == '') navigate('/login');
	}, []);

	return (
		<ClickedChatContext.Provider value={{ clickedChatroom, setClickedChatroom }}>
			<ChatWrap>
				<div className="chat_inner">
					<ChatList />
					{/* <DefaultChatRoom /> */}
					<ChatRoom />
				</div>
			</ChatWrap>
		</ClickedChatContext.Provider>
	);
}

export default Chat;
