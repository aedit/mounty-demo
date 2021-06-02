import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: {
      top_rated: [],
      upcoming: []
    },
    pageNo: {
      top_rated: 1,
      upcoming: 1
    }
  },
  getters: {
    list(state) {
      return (component) => state.list[component]
    },
    pageNo(state) {
      return (component) => state.pageNo[component]
    }
  },
  mutations: {
    updateList(state, component, list) {
      state.list[component].push(list)
    },
    updatePageNo(state, component, pageNo) {
      state.pageNo[component] = pageNo
    }
  }
})
