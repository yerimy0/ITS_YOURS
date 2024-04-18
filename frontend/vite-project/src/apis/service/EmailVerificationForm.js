import instance from '../axiosInstance';

export const sendVerifyEmail = async email => {
	try {
		const response = await instance.post('/members/sendVerifyEmail', { email });
		return response.data;
	} catch (error) {
		console.error('sendVerifyEmail Error:', error);
		throw error;
	}
};

export const verifyCode = async (email, verificationCode) => {
	try {
		const response = await instance.post('/members/verifyCode', { email, code: verificationCode });
		return response.data;
	} catch (error) {
		console.error('verifyCode Error:', error);
		throw error;
	}
};
