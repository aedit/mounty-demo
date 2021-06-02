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
    },
    total_pages: {
      top_rated: null,
      upcoming: null
    }
  },
  getters: {
    list(state) {
      return (component) => state.list[component]
    },
    pageNo(state) {
      return (component) => state.pageNo[component]
    },
    total_pages(state) {
      return (component) => state.total_pages[component]
    }
  },
  mutations: {
    updateList(state, item) {
      Vue.set(state.list, item.component, item.list)
    },
    updatePageNo(state, item) {
      state.pageNo[item.component] = item.pageNo
    },
    total_pages(state, item) {
      state.total_pages[item.component] = item.total_pages
    }
  }
})
