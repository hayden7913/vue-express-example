<template>
  <ControlPanel
    label="Heater"
  >
    <BaseCard>
      <ControlPanelItem label="Power">
        <PowerControl
          v-bind:power-on="powerOn"
          v-on:toggle-power="togglePower"
        />
      </ControlPanelItem>
      <ControlPanelItem label="Heater Level">
        <SliderControl
          v-bind:level="level"
          v-bind:level-label-func="getSliderLabel"
        />
      </ControlPanelItem>
      <ControlPanelItem label="Temp Range">
        <!-- Returns a range slider since an array is suplied to the level prop -->
        <SliderControl
          v-bind:level="heaterMinMax"
          v-bind:level-label-func="getTempLabel"
        />
      </ControlPanelItem>
    </BaseCard>
  </ControlPanel>
</template>

<script>
import BaseCard from './BaseCard';
import ControlPanel from './ControlPanel';
import ControlPanelItem from './ControlPanelItem';
import PowerControl from './PowerControl';
import SliderControl from './SliderControl';

import mockDataEnvironment from '../data/mockDataEnvironment';

export default {
  name: 'HeaterControlPanel',
  components: {
    BaseCard,
    ControlPanel,
    ControlPanelItem,
    PowerControl,
    SliderControl,
  },
  data() {
    const { state, levels, limits } = mockDataEnvironment;
    return {
      powerOn: state.Heater,
      level: Number(levels.Heater.level),
      tempRange: limits.Heater,
    };
  },
  computed: {
    heaterMinMax() {
      return [this.tempRange['LOW-value'], this.tempRange['HIGH-value']];
    },
  },
  methods: {
    togglePower() {
      this.powerOn = !this.powerOn;
    },
    getSliderLabel(sliderPos) {
      return `${sliderPos}%`;
    },
    getTempLabel(sliderPos) {
      return `${sliderPos[0]} °C\u00A0\u00A0to\u00A0\u00A0${sliderPos[1]} °C`;
    },
  },
};
</script>

<style>
</style>
