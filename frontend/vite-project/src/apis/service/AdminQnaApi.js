import instance from '../axiosInstance';

export const fetchQnaData = async (currentPage, perPage, setIsLoading, setQnaList, setError) => {
	setIsLoading(true);
	try {
		const res = await instance.get('/admin/qna');
		if (res.status === 200) {
			setQnaList(res.data.data);
		} else {
			throw new Error('데이터 패치 실패');
		}
	} catch (error) {
		console.error('QnA 데이터를 가져오는 중 오류발생: ', error);
		setError('데이터로딩에 실패했습니다.');
	}
	setIsLoading(false);
};

export const handleAnswerSubmit = (qnaList, setQnaList, setIsModalOpen, answer, qnaId) => {
	const updatedQnaList = qnaList.map(qna => (qna.id === qnaId ? { ...qna, Process: '처리' } : qna));
	setQnaList(updatedQnaList);
	setIsModalOpen(false);
	// 노드메일링
};
