<template>
  <SliderControlTemplate level-label="25">
    <BaseRangeSlider
      v-bind:min-val="20"
      v-bind:max-val="80"
      v-on:slider-move="updatePosition"
    />
  </SliderControlTemplate>
</template>

<script>
import BaseRangeSlider from './BaseRangeSlider';
import SliderControlTemplate from './SliderControlTemplate';

export default {
  name: 'RangeSliderControl',
  components: {
    BaseRangeSlider,
    SliderControlTemplate,
  },
  data() {
    return {
      position: 0,
    };
  },
  computed: {
    levelLabel() {
      return this.levelLabelFunc(this.position);
    },
  },
  methods: {
    updatePosition(pos) {
      console.log(pos);
      this.position = pos;
    },
  },
};
</script>

<style>
</style>
