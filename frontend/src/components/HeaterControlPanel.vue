<template>
  <ControlPanel
    label="Heater"
  >
    <BaseCard>
      <div id="slider" />
      <ControlPanelItem label="Power">
        <PowerControl
          v-bind:power-on="heater.powerOn"
          v-on:toggle-power="toggleHeaterPower"
        />
      </ControlPanelItem>
      <ControlPanelItem label="Heater Level">
        <SliderControl
          v-bind:level="heaterLevel"
          v-bind:level-label-func="getSliderLabel"
          v-on:slider-move="updateHeaterLevel"
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
import { mapGetters, mapMutations } from 'vuex';
import noUiSlider from 'nouislider';

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
    ...mapGetters(['heater']),
    heaterLevel() {
      return Number(this.heater.level);
    },
    heaterMinMax() {
      return [this.heater.minTemp, this.heater.maxTemp];
    },
  },
  created() {
    console.log('created');
    this.$store.dispatch('fetchEnvironmentState');
    const slider = document.getElementById('slider');

    noUiSlider.create(slider, {
      start: [20, 80],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });
  },
  methods: {
    ...mapMutations(['toggleHeaterPower', 'updateHeaterLevel']),
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
