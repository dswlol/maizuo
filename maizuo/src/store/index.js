import Vue from 'vue'
import Vuex from 'vuex'
import mz from './mz/index'
Vue.use(Vuex)

var store = new Vuex.Store({
	modules:{
		mz
	}
})
export default store