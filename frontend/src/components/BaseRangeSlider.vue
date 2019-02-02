<template>
  <v-range-slider
    v-model="position"
    v-bind:value="[minVal, maxVal]"
    v-on:input="$emit('slider-move', position)"
  />
</template>

<script>
export default {
  name: 'BaseRangeSlider',
  props: {
    minVal: {
      type: Number,
      required: true,
    },
    maxVal: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      position: [this.minVal, this.maxVal],
    };
  },
};
</script>

<style>
</style>
