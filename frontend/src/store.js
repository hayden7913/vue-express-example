import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const todoUrl = 'https://jsonplaceholder.typicode.com/todos/1';
const url = 'http://localhost:3000';

export default new Vuex.Store({
  state: {
    count: 0,
    environment: {},
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    loadEnvironment(state, environment) {
      state.environment = environment;
    },
  },
  actions: {
    fetchEnvironment({ commit }) {
      axios.get(url)
        .then((res) => {
          commit('loadEnvironment', res.data);
        });
    },
  },
});
