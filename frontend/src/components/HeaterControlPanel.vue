<template>
  <ControlPanel
    label="Heater"
  >
    <div id="slider" />
    <ControlPanelItem label="Power">
      <PowerControl
        v-bind:power-on="heater.powerOn"
        v-on:toggle-power="TOGGLE_HEATER_POWER"
      />
    </ControlPanelItem>
    <ControlPanelItem label="Heater Level">
      <SliderControl
        v-bind:level="heaterLevel"
        v-bind:label="levelLabel"
        v-bind:handle-input="UPDATE_HEATER_LEVEL"
      />
    </ControlPanelItem>
    <ControlPanelItem
      label="Temp Range"
      v-bind:include-divider="false"
    >
      <!-- Returns a range slider since an array is suplied to the level prop -->
      <SliderControl
        v-bind:level="heaterMinMax"
        v-bind:label="limitLabel"
        v-bind:handle-input="UPDATE_HEATER_LEVEL"
      />
    </ControlPanelItem>
  </ControlPanel>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import {
  UPDATE_HEATER_LEVEL,
  TOGGLE_HEATER_POWER,
} from '@/constants/MutationTypes';

import {
  FETCH_ENVIRONMENT_STATE,
} from '@/constants/ActionTypes';

import ControlPanel from './ControlPanel';
import ControlPanelItem from './ControlPanelItem';
import PowerControl from './PowerControl';
import SliderControl from './SliderControl';

export default {
  name: 'HeaterControlPanel',
  components: {
    ControlPanel,
    ControlPanelItem,
    PowerControl,
    SliderControl,
  },
  computed: {
    ...mapGetters(['heater']),
    heaterLevel() {
      const { level } = this.heater;
      return level || 0;
    },
    heaterMinMax() {
      const { minTemp, maxTemp } = this.heater;
      return minTemp && maxTemp
        ? [minTemp, maxTemp]
        : [0, 0];
    },
    levelLabel() {
      return `${this.heater.level}%`;
    },
    limitLabel() {
      return (
        `${this.heater.minTemp} °C\u00A0\u00A0to\u00A0\u00A0${this.heater.maxTemp} °C`
      );
    },
  },
  methods: {
    ...mapMutations([TOGGLE_HEATER_POWER, UPDATE_HEATER_LEVEL]),
  },
};
</script>
