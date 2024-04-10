import { useEffect } from 'react';
import instance from '../../utils/api';
import ChatWrap from './ChatStyle';
import ChatList from '../../components/pages/Chat/ChatList';
import DefaultChatRoom from '../../components/pages/Chat/DefaultChatRoom';
import ChatRoom from '../../components/pages/Chat/ChatRoom';

function Chat() {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await instance.get('/api/products/list');
				console.log(response.data);
				setProducts(response.data);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching product data:', error);
				setError('Error fetching product data. Please try again later.');
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	return (
		<ChatWrap>
			<ChatList />
			{/* <DefaultChatRoom /> */}
			<ChatRoom />
		</ChatWrap>
	);
}

export default Chat;
