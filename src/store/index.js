import { createStore } from 'vuex'
import mutations from "./mutations"
import actions from "./actions"

const store = createStore({
  state: {
    count: 0,
    Routes: []
  },
  mutations: mutations,
  actions: actions
})

export default store;