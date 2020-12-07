import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
	count: 0,
	goodsCar: []
}
const mutations = {
	shoppingCartData(state, data) {
		state.goodsCar.push(data);
		console.log(state.goodsCar)
	}
}
const actions = {

}
export default new Vuex.Store({
	state,
	mutations,
	actions
})
