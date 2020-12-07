import request from './config.js'
module.exports = {
	// 登录
	login(p) {
		return request('/admin/login', 'GET', p);
	},
	//退出登录
	signOut(p) {
		return request('/admin/logout', 'GET', p);
	},
	// 首页导航栏
	tabNav(p) {
		return request('/mechant/getClassifyList', 'GET', p);
	},
	//调用菜品
	navBarContent(p) {
		return request('/mechant/queryProductList', "GET", p)
	}
}
