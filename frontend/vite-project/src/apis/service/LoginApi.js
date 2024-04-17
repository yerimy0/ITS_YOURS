import instance from '../axiosInstance';

const loginApi = async (userId, password) => {
	try {
		const response = await instance.post('/members/login', { id: userId, password });
		console.log(response);
		const { accessToken } = response.data;
		return { accessToken, error: null };
	} catch (error) {
		console.error('로그인 실패:', error);
		return { token: null, error: error };
	}
};

// 로그아웃
function logout() {
	document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
	localStorage.setItem('userId', '');
}
export { loginApi, logout };
