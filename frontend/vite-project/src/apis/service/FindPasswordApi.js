import instance from '../axiosInstance';

const findPassword = async (id, email, setModalMessage, setIsModalOpen, navigate) => {
	try {
		await instance.post('/members/findPassword', { id: id, email });
		setModalMessage('비밀번호를 이메일로 보냈습니다.\n이메일을 확인해주세요.');
		setIsModalOpen(true);
		setTimeout(() => {
			setIsModalOpen(false);
			navigate('/login');
		}, 3000);
	} catch (error) {
		console.error('비밀번호 찾기 실패:', error);
		setModalMessage('비밀번호 찾기에 실패하였습니다. 다시 시도해주세요.');
		setIsModalOpen(true);
		setTimeout(() => setIsModalOpen(false), 3000);
	}
};

export { findPassword };
