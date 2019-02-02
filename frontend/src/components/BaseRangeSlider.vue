<template>
  <v-range-slider
    v-model="positions"
    v-bind:value="levels"
    v-on:input="$emit('slider-move', positions)"
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
  },
  data() {
    return {
      positions: [this.levels[0], this.levels[1]],
    };
  },
};
</script>

<style>
</style>
