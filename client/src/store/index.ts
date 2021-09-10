import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    friends: [],
    visibleFriends: [],
    currentFriend: {},
    pageSize: 10,
    currentPage: 0,
    windowWidth: window.innerWidth
  },
  mutations: {
    SET_FRIENDS(state, val) {
      state.friends = val
    },
    SET_PAGE(state, value) {
      state.currentPage = value
    },
    SET_VISIBLE(state, value) {
      state.visibleFriends = value
    },
    SET_WINDOW_WIDTH(state, value) {
      state.windowWidth = value
    },
    SET_CURRENT_FRIEND(state, value) {
      state.currentFriend = value
    }
  },
  actions: {
    async getFriends({ commit }) {
      await axios.get('http://localhost:8000/api/get-friends')
        .then(resp => resp.data)
        .then(data => {
          const friendsData = data
          commit("SET_FRIENDS", friendsData)
        })
    },
    updateVisibleFriends({commit}) {
      const visible = this.state.friends.slice(this.state.currentPage * this.state.pageSize, (this.state.currentPage * this.state.pageSize) + this.state.pageSize)
      if (visible.length == 0 && this.state.currentPage > 0) {
        this.dispatch("updatePage", this.state.currentPage - 1)
      } else if (this.state.currentPage < 0) { 
        this.dispatch("updatePage", this.state.currentPage + 1)
      } else {
        commit("SET_VISIBLE", visible) 
      }
    },
    updatePage({commit}, payload) {
      commit("SET_PAGE", payload)
      this.dispatch('updateVisibleFriends')
    },
    updateWindowWidth({commit}, payload) {
      commit("SET_WINDOW_WIDTH", payload)
    },
    updateCurrentFriend({commit}, payload) {
      const friend = this.state.friends[payload - 1]
      commit("SET_CURRENT_FRIEND", friend)
    }
  },
  modules: {},
});
