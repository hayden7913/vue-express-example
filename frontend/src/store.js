import Vue from 'vue';
import Vuex from 'vuex';

import callApi from './utils/ApiUtils';
import { ENVIRONMENT_URL } from './constants/ApiConstants';
import {
  LOAD_ENVIRONMENT,
  UPDATE_HEATER_LEVEL,
  TOGGLE_HEATER_POWER,
} from './constants/MutationTypes';
import {
  FETCH_ENVIRONMENT_STATE,
} from './constants/ActionTypes';

Vue.use(Vuex);

const reformatByActuator = ({ state, levels, limits }) => ({
  air: {
    powerOn: state.Air,
  },
  heater: {
    powerOn: state.Heater,
    level: Number(levels.Heater.level),
    minTemp: Number(limits.Heater['LOW-value']),
    maxTemp: Number(limits.Heater['HIGH-value']),
  },
  lamp: {
    powerOn: state.Lamp,
    level: Number(levels.Lamp.level),
  },
});

// TODO: move to getters file
const getHeater = state => state.environment.heater;
const getHasFetched = state => state.hasFetched;

export default new Vuex.Store({
  state: {
    hasFetched: false,
    environment: {
      air: {
        powerOn: false,
      },
      heater: {
        powerOn: false,
        level: 0,
        minTemp: 0,
        maxTemp: 0,
      },
      lamp: {
        powerOn: false,
        level: 0,
      },
    },
  },
  mutations: {
    [LOAD_ENVIRONMENT](state, environment) {
      state.environment = environment;
      state.hasFetched = true;
    },
    [TOGGLE_HEATER_POWER](state) {
      const { powerOn } = getHeater(state);
      state.environment.heater.powerOn = !powerOn;
    },
    [UPDATE_HEATER_LEVEL](state, level) {
      console.log('from mutation', level);
      state.environment.heater.level = level;
    },
    // ...more mutations for updating air and light state
  },
  actions: {
    // TODO: add a handler for errors
    // TODO: use success and failure mutations instead of LOAD_ENVIRONMENT
    [FETCH_ENVIRONMENT_STATE]({ commit }) {
      callApi(ENVIRONMENT_URL)
        .then((data) => {
          const reformattedState = reformatByActuator(data);
          commit(LOAD_ENVIRONMENT, reformattedState);
        });
    },
  },
  getters: {
    heater: getHeater,
    hasFetched: getHasFetched,
  },
  strict: process.env.NODE_ENV !== 'production',
});
