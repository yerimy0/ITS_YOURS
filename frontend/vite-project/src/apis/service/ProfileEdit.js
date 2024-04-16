import instance from '../axiosInstance';

async function fetchMyPageData() {
	try {
		const response = await instance.get('/members/me');
		return response.data;
	} catch (error) {
		console.error('프로필 데이터 가져오기 오류:', error);
		throw error;
	}
}

async function updateMyPageData(formData) {
	try {
		const response = await instance.put('/members/me', formData);
		return response.data;
	} catch (error) {
		console.error('프로필 데이터 업데이트 오류:', error);
		throw error;
	}
}

export { fetchMyPageData, updateMyPageData };
