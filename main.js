import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
import uView from "uview-ui";
import axios from "./api/api.js";
Vue.use(uView);

let showToast = (title) => {
	uni.showToast({
		title: title,
		icon: "none",
		duration: 2000
	})
};
Vue.prototype.$axios = axios;
Vue.prototype.$showToast = showToast;
const app = new Vue({
	...App
})
app.$mount()
