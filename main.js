import Vue from 'vue'
import App from './App'
import store from "./store/index.js"
Vue.config.productionTip = false

App.mpType = 'app'
import uView from "uview-ui";
import axios from "./api/api.js";
import formatDate from './utils/time.js'
Vue.use(uView);

let showToast = (title) => {
	uni.showToast({
		title: title,
		icon: "none",
		duration: 2000
	})
};
//时间戳转换方法    date:时间戳数字

Vue.prototype.$axios = axios;
Vue.prototype.$showToast = showToast;
Vue.prototype.$formatDate = formatDate;
const app = new Vue({
	...App,
	store
})
app.$mount()
