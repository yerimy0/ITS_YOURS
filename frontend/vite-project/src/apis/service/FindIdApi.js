import instance from '../axiosInstance';

const findUserId = async (realName, email, setModalMessage, setIsModalOpen, navigate) => {
	try {
		const response = await instance.post('/members/findId', { id: realName, email });
		const userId = response.data.userId;
		navigate(`/showid?email=${encodeURIComponent(email)}&userId=${encodeURIComponent(userId)}`);
	} catch (error) {
		console.error('아이디 찾기 실패:', error);
		setModalMessage('아이디 찾기에 실패하였습니다. 다시 시도해주세요.');
		setIsModalOpen(true);
		setTimeout(() => setIsModalOpen(false), 3000);
	}
};

export { findUserId };
