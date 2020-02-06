import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    case: [],
    desc: {}
  },
  mutations: {
    setGlobalData(state, obj) {
      state.news = obj.news
      state.case = obj.case
      state.desc = obj.desc
    }
  },
  actions: {
    setGlobalData(context, obj) {
      context.commit('setGlobalData', obj)
    }
  }
})
