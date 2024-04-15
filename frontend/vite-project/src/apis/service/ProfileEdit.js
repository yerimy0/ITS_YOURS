import instance from '../axiosInstance';

/**
 * 현재 사용자의 프로필 데이터를 가져옵니다.
 * @returns {Promise<Object>} 사용자의 프로필 데이터
 */
async function fetchMyPageData() {
	try {
		const response = await instance.get('/members/me');
		return response.data;
	} catch (error) {
		console.error('프로필 데이터 가져오기 오류:', error);
		throw error;
	}
}

/**
 * 사용자의 프로필 데이터를 업데이트합니다.
 * @param {FormData} formData - 프로필 업데이트에 필요한 폼 데이터
 * @returns {Promise<Object>} 프로필 업데이트 후의 응답 데이터
 */
async function updateMyPageData(formData) {
	try {
		const response = await instance({
			method: 'put',
			url: '/members/me',
			data: formData,
			headers: { 'Content-Type': 'multipart/form-data' },
		});
		return response.data;
	} catch (error) {
		console.error('프로필 데이터 업데이트 오류:', error);
		throw error;
	}
}

export { fetchMyPageData, updateMyPageData };
