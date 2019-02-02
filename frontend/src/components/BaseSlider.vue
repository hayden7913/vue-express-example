<template>
  <v-slider
    v-model="position"
    v-bind:value="value"
    color="pink"
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
  },
  data() {
    return {
      position: this.value,
    };
  },
  methods: {
    sayHi() {
      console.log(this.position);
    },
  },
};
</script>

<style>
</style>
