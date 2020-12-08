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
	},
	//购物车直接下单
	addProductChart(p) {
		return request('/mechant/addProductChart', "POST", p)
	},
	//购物车加单
	putProductToChar(p) {
		return request('/mechant/putProductToChar', "POST", p)
	},
	//订单列表
	queryProductChart(p){
		return request("/mechant/queryProductChart","GET",p)
	},
	//结账
	unifiedorder(p){
		return request("/pay/unifiedorder","GET",p)
	},
	//查询订单支付状态
	getChartState(p){
		return request("/mechant/getChartState","GET",p)
	}
}
