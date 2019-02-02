<template>
  <input
    type="checkbox"
    :value="text"
    :style="{border: '1px solid'}"
    v-on:on:input="text = $event.target.value"
  >
</template>

<script>
// TODO: delete this component
export default {
  name: 'TestInput',
  data() {
    return {
      text: false,
    };
  },
  watch: {
    text(text) {
      console.log(text);
    },
  },
  methods: {
    sayHi() {
      console.log('hello');
    },
  },
};
</script>

<style scoped lang="scss">
</style>
