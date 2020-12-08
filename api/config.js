// import uniRequest from 'uni-request'

if (process.env.NODE_ENV === 'development') {
	// 开发环境
	var baseUrl = "http://47.114.48.233:8018/jm/support";
} else {
	// 生成环境
	var baseUrl = "http://www.dianphp.com/";
}


const request = (url = '', method = 'GET', data = {}) => {
	const header = {}
	const token = uni.getStorageSync('token');
	if (token == 'undefined' || token == '') {
		uni.redirectTo({
			url: '/pages/login/login'
		});
	} else {
		header['token'] = token
	}
	header['content-type'] = "application/json";
	return new Promise((resolve, reject) => {
		uni.request({
			method: method,
			url: baseUrl + url,
			data: data,
			header: header
		}).then((response) => {
			let [error, res] = response;
			// 登录过期
			switch (res.statusCode) {
				case 200:
					resolve(res.data);
					break;
				case 500:
					uni.redirectTo({
						url: '/pages/login/login'
					});
					break;
				case 401:
					uni.redirectTo({
						url: '/pages/login/login'
					});
					break;
			};

		}).catch((error) => {
			console.log(1, error)
			let [err, res] = error;
			reject(err);
		});
	});
}
export default request;
