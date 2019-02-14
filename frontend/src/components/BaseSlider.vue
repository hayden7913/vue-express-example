<template>
  <v-slider
    v-bind:color="color"
    v-bind:value="position"
    thumb-label
    v-on:input="handleInput"
    v-on:change="handleChange"
  />
</template>

<script>
export default {
  name: 'BaseSlider',
  props: {
    position: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    handleChange: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleInput(val) {
      this.$emit('update:position', val);
    },
  },
};
</script>

<style>
</style>
