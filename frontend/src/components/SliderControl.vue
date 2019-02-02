<template>
  <SliderControlTemplate v-bind:levelLabel="levelLabel">
    <BaseSlider
      v-bind:value="level"
      v-on:slider-move="updatePosition"
    />
  </SliderControlTemplate>
</template>

<script>
import BaseSlider from './BaseSlider';
import SliderControlTemplate from './SliderControlTemplate';

export default {
  name: 'SliderControl',
  components: {
    BaseSlider,
    SliderControlTemplate,
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
    levelLabelFunc: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      position: this.level,
    };
  },
  computed: {
    levelLabel() {
      return this.levelLabelFunc(this.position);
    },
  },
  methods: {
    updatePosition(pos) {
      this.position = pos;
    },
  },
};
</script>

<style>
/* TODO: fix bug where slider jumps to left at 100% */
.slider-control {
  display: flex;
  align-items: center;
}

.slider-control-level {
  margin-left: 20px;
}

</style>
