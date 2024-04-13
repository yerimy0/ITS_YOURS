import instance from '../../apis/axiosInstance';

const signUpApi = async formData => {
	try {
		const response = await instance.post('/members/signUp', formData);
		console.log('회원가입 성공:', response.data);
		return { data: response.data, error: null };
	} catch (error) {
		console.error('회원가입 실패:', error);
		return { data: null, error: error };
	}
};

export { signUpApi };
