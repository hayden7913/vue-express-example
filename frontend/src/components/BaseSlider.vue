<template>
  <v-slider
    color="pink"
    v-bind:value="level.toString()"
  />
</template>

<script>
export default {
  name: 'BaseSlider',
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
</style>
