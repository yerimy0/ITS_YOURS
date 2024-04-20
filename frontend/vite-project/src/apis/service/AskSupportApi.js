import instance from '../axiosInstance';

async function fetchInquiries() {
	try {
		const response = await instance.get('/qna');
		return response.data;
	} catch (error) {
		console.error('문의사항을 가져오는데 실패했습니다:', error);
		throw error;
	}
}

async function submitInquiry(title, content) {
	try {
		await instance.post('/qna', { title, content });
	} catch (error) {
		console.error('문의 등록에 실패했습니다:', error);
		throw error;
	}
}

async function deleteInquiry(_id) {
	try {
		console.log(_id);
		await instance.delete('/qna/', { params: { qnaId: _id } });
	} catch (error) {
		console.error(
			'문의 삭제에 실패했습니다:',
			error.response ? error.response.data.message : error.message,
		);
		throw error;
	}
}

export { fetchInquiries, submitInquiry, deleteInquiry };
