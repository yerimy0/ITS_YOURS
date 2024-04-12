import axios, { HttpStatusCode, isAxiosError } from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

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
			console.error('asios 외부에서 발생한 에러:', err.message);
		}
		return Promise.reject(err);
	},
);

// 응답 인터셉터를 작성
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
			console.error('asios 외부에서 발생한 에러:', err.message);
		}
		return Promise.reject(err);
	},
);

export default instance;
