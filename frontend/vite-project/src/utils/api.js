import axios, { HttpStatusCode, isAxiosError } from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.timeout = 5000;

const instance = axios.create({
	withCredentials: true,
	baseURL: 'http://localhost:4000',
	headers: {
		'Content-Type': 'application/json',
	},
});

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

//응답 인터셉터를 작성
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
