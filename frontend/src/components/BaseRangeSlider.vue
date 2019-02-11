<template>
  <v-range-slider
    v-model="slidersliderPositions"
    v-bind:value="levels"
    v-bind:color="color"
    v-on:input="$emit('slider-move', slidersliderPositions)"
  />
</template>

<script>
export default {
  name: 'BaseRangeSlider',
  props: {
    levels: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      slidersliderPositions: [this.levels[0], this.levels[1]],
    };
  },
};
</script>

<style>
</style>
