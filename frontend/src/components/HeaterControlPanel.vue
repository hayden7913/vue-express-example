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
    </BaseCard>
  </ControlPanel>
</template>

<script>
import ControlPanel from './ControlPanel';
import BaseCard from './BaseCard';
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
  methods: {
    togglePower() {
      this.powerOn = !this.powerOn;
    },
    getSliderLabel(sliderPos) {
      return `${sliderPos}%`;
    },
  },
};
</script>

<style>
</style>
