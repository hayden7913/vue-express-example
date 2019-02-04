import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import environmentDefaultState from './data/mockDataEnvironment';

Vue.use(Vuex);

const url = 'http://localhost:3000';

export default new Vuex.Store({
  state: {
    count: 0,
    environment: environmentDefaultState,
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
    // TODO: replace with generic callAPI function
    fetchEnvironmentState({ commit }) {
      axios.get(url)
        .then((res) => {
          commit('loadEnvironment', res.data);
        });
    },
  },
  getters: {
    environmentLevels: state => state.environment.levels,
    environmentLimits: state => state.environment.limits,
    environmentState: state => state.environment.state,
    // heater state
    heaterPowerOn: (state, getters) => getters.environmentState.Heater,
    heaterLimits: (state, getters) => getters.environmentLimits.Heater,
    heaterLevels: (state, getters) => getters.environmentLevels.Heater,
    heaterLevel: (state, getters) => Number(getters.heaterLevels.level),
  },
});
