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
      state.desc = obj.desc
    },
    setCaseData(state, arr) {
      state.case = arr
    }
  },
  actions: {
    setGlobalData(context, obj) {
      context.commit('setGlobalData', obj)
    },
    setCaseData(context, arr) {
      context.commit('setCaseData', arr)
    }
  }
})
