import axios, { HttpStatusCode, isAxiosError } from 'axios';

const getAuthToken = () => {
	const token = document.cookie.split('; ').find(row => row.startsWith('authToken='));
	return token ? token.split('=')[1] : null;
};

const authToken = getAuthToken();

const instance = authToken
	? axios.create({
			withCredentials: true,
			baseURL: '/api',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${authToken}`,
			},
		})
	: null;

if (instance) {
	instance.defaults.headers.common['Content-Type'] = 'application/json';
	instance.defaults.timeout = 10000;

	instance.interceptors.request.use(
		req => {
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
}

export default instance;
