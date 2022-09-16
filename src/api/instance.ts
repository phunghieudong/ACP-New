// import {LocalStorage} from '~/utils';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {appConfig} from '../configs';

// GET CONFIG URL
function getUrl(config: any) {
	if (config.baseURL) {
		return config.url.replace(config.baseURL, '').split('?')[0];
	}
	return config.url;
}

// ADD TOKEN TO HEADER
// export const getAuthHeader = async () => {
// 	// const accessToken = await getAccessToken();
// 	const accessToken = await LocalStorage.getToken();
// 	if (accessToken !== null) {
// 		return {token: accessToken};
// 	} else {
// 		return '';
// 	}
// };

// API INSTANCE
export const instance = axios.create({
	baseURL: appConfig.hostURL,
	headers: {
		Accept: 'application/json',
	},
});

// SENT REQUEST
// instance.interceptors.request.use(
// 	async (config: AxiosRequestConfig) => {
// 		const url = getUrl(config);
// 		if (!url.toString().includes('/auth/')) {
// 			const authHeader = await getAuthHeader();
// 			config.headers = {
// 				...config.headers,
// 				...authHeader,
// 			};
// 		}
// 		// CONSOLE LOG CALL API
// 		console.log(`%c ${config.method?.toString().toUpperCase()} - ${url}:`, 'color: #0086b3; font-weight: bold', config);
// 		return config;
// 	},
// 	error => {
// 		console.log(`%c ${error.response.status}  :`, 'color: red; font-weight: bold', error.response.data);
// 		return Promise.reject(error);
// 	},
// );

// CHECK RESPONSE STATUS
const checkResponse = (error: any): void => {
	switch (error.response.status) {
		case 401:
			console.log('Hết hạn token');
			break;
		case 403:
			console.log('Bạn không có quyền thực hiện');
			break;
		case 400:
			console.log(error.response.message);
			break;
		default:
			console.log(`%c ${error.response.status}  :`, 'color: red; font-weight: bold', error.response.data);
			break;
	}
};

// RESPONSE
instance.interceptors.response.use(
	(response: AxiosResponse) => {
		// LOG RESPONSE
		console.log(` %c ${response.status} - ${getUrl(response.config)}:`, 'color: #008000; font-weight: bold', response);
		return response;
	},
	function (error) {
		if (error.response) {
			checkResponse(error);
			// server trả response về là lỗi code đã handle
			console.log(`%c ${error.response.status}  :`, 'color: red; font-weight: bold', error.response.data);
			return Promise.reject({
				status: error.response.status,
				message: error.response.data.message,
			});
		} else if (error.request) {
			// request mãi mãi ko thấy response
			// `error.request` là XMLHttpRequest trong website còn nodejs là http.ClientRequest
			console.log(`%c ${JSON.stringify(error)}  :`, 'color: red; font-weight: bold', error.response.data);
			return Promise.reject(error.request);
		} else {
			// có gì đó sai sai, hình như là hàm request sai
			console.log(`%c ${JSON.stringify(error)}  :`, 'color: red; font-weight: bold', 'có gì đó sai sai, hình như là setting sai');
			return Promise.reject(error);
		}
	},
);
