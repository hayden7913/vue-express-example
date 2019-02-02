<template>
  <v-slider
    v-model="position"
    v-bind:value="value"
    v-bind:color="color"
    thumb-label
    v-on:input="$emit('slider-move', position)"
  />
</template>

<script>
export default {
  name: 'BaseSlider',
  props: {
    value: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      position: this.value,
    };
  },
};
</script>

<style>
</style>
