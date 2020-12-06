
// import baseUrl from './request.js'
if (process.env.NODE_ENV === 'development') {
	// 开发环境
var 	baseUrl = "http://47.114.48.233:8018/jm/support";
} else {
	// 生成环境
var	baseUrl = "http://www.dianphp.com/";
}
const header = {}
const request = (url='',method='GET',data={}) => {
    header['content-type'] = "application/x-www-form-urlencoded";
    return new Promise((resolve,reject) => {
        uni.request({
            method:method,
            url:baseUrl + url,
            data:data,
            header:header
        }).then((response) => {
			console.log(response)
            let [error,res] = response;
            // 登录过期
            if(res.code == 401){
                uni.showToast({
                    title:'登录过期,请重新登录',
                    duration:2000
                });
            };            
            resolve(res.data);
        }).catch((error) => {
            let [err,res] = error;
            reject(err);
        });
    });
}
export default request;
