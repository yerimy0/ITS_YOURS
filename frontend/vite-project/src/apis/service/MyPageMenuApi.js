import instance from '../axiosInstance';

async function fetchMyPageData() {
	try {
		const response = await instance.get('/members/me');
		return response.data;
	} catch (error) {
		console.error('Error fetching MyPage data:', error);
		throw error;
	}
}

export { fetchMyPageData };
