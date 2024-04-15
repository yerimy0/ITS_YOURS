import instance from '../axiosInstance';

export async function fetchLocations() {
	try {
		const res = await instance.get('/categories');
		return res.data.data;
	} catch (err) {
		console.error('Error fetching locations:', err);
		throw err; // 상위 호출자에게 에러를 전달할 수 있도록 throw
	}
}
