import axios, { HttpStatusCode, isAxiosError } from 'axios';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.timeout = 5000;
const getAuthToken = () => {
	const token = document.cookie.split('; ').find(row => row.startsWith('authToken='));
	return token ? token.split('=')[1] : null;
};

const instance = axios.create({
	withCredentials: true,
	baseURL: '/api',
});

instance.interceptors.request.use(
	req => {
		const authToken = getAuthToken();
		if (req.data instanceof FormData) {
			req.headers['Content-Type'] = 'multipart/form-data';
		}
		req.headers.Authorization = `${authToken}`;
		return req;
	},
	err => {
		if (isAxiosError(err)) {
			if (err.status === HttpStatusCode.BadRequest) {
				console.error('Bad request - 400');
			} else if (err.status === HttpStatusCode.NotFound) {
				console.error('Not found - 404');
			} else {
				console.error('Request Error: ', err.message);
			}
		} else {
			console.error('axios 외부에서 발생한 에러:', err.message);
		}
		return Promise.reject(err);
	},
);

instance.interceptors.response.use(
	res => {
		return res;
	},
	err => {
		if (isAxiosError(err)) {
			if (err.status === HttpStatusCode.Unauthorized) {
				console.error('Unauthorized - 401');
			} else if (err.status === HttpStatusCode.InternalServerError) {
				console.error('Internal server error - 500');
			} else {
				console.error('Request Error: ', err.message);
			}
		} else {
			console.error('axios 외부에서 발생한 에러:', err.message);
		}
		return Promise.reject(err);
	},
);

export default instance;
