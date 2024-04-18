import instance from '../axiosInstance';

async function fetchQnaData() {
	try {
		const res = await instance.get('/qna/admin');
		return res.data;
	} catch (error) {
		console.error('QnA목록을 가져오는데 실패했습니다.', error);
		throw error;
	}
}

async function qnaMailing(Id) {
	try {
		const res = await instance.post(`/admin/qna/answer/${Id}`);
		return res.data;
	} catch (error) {
		console.error('메일링에 실패했습니다:', error);
		throw error;
	}
}

export { fetchQnaData, qnaMailing };
