import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    case: [],
    desc: {},
    gdy: {}
  },
  mutations: {
    SET_GLOBAL(state, obj) {
      state.news = obj.news
      state.desc = obj.desc
    },
    SET_CASE(state, arr) {
      state.case = arr
    },
    SET_GDY(state, obj) {
      state.gdy = obj
    }
  },
  actions: {
    setGlobalData(context, obj) {
      context.commit('SET_GLOBAL', obj)
    },
    setCaseData(context, arr) {
      context.commit('SET_CASE', arr)
    },
    setGdyData(context, obj) {
      context.commit('SET_GDY', obj)
    }
  }
})
