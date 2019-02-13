<template>
  <!-- v-on:input="$emit('update:position', $event.target.value)" -->
  <v-slider
    v-bind:color="color"
    v-bind:value="position"
    thumb-label
    v-on:input="handleChange"
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
    handleInput: {
      type: Function,
      required: true,
    },
  },
  methods: {
    handleChange(val) {
      this.$emit('update:position', val);
    },
  },
};
</script>

<style>
</style>
