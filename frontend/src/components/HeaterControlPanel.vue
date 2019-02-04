<template>
  <ControlPanel
    label="Heater"
  >
    <BaseCard>
      <ControlPanelItem label="Power">
        <PowerControl
          v-bind:power-on="heaterPowerOn"
          v-on:toggle-power="togglePower"
        />
      </ControlPanelItem>
      <ControlPanelItem label="Heater Level">
        <SliderControl
          v-bind:level="heaterLevel"
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
import { mapGetters } from 'vuex';
import BaseCard from './BaseCard';
import ControlPanel from './ControlPanel';
import ControlPanelItem from './ControlPanelItem';
import PowerControl from './PowerControl';
import SliderControl from './SliderControl';

export default {
  name: 'HeaterControlPanel',
  components: {
    BaseCard,
    ControlPanel,
    ControlPanelItem,
    PowerControl,
    SliderControl,
  },
  computed: {
    ...mapGetters([
      'heaterPowerOn',
      'heaterLimits',
      'heaterLevel',
    ]),
    heaterMinMax() {
      return [this.heaterLimits['LOW-value'], this.heaterLimits['HIGH-value']];
    },
  },
  created() {
    this.$store.dispatch('fetchEnvironmentState');
    console.log(this.$store.getters);
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
    sayHi() {
      this.$store.commit('increment');
    },
  },
};
</script>

<style>
</style>
