<!-- Returns a Range Slider if an array is supplied for the level prop  -->
<!-- Returns a normal slider if a scalar is supplied-->
<template>
  <SliderControlTemplate v-bind:level-label="levelLabel">
    <BaseRangeSlider
      v-if="Array.isArray(level)"
      v-bind:levels="level"
      v-on:slider-move="updatePosition"
    />
    <BaseSlider
      v-else
      v-bind:value="level"
      v-on:slider-move="updatePosition"
    />
  </SliderControlTemplate>
</template>

<script>
import BaseSlider from './BaseSlider';
import BaseRangeSlider from './BaseRangeSlider';
import SliderControlTemplate from './SliderControlTemplate';

export default {
  name: 'SliderControl',
  components: {
    BaseSlider,
    BaseRangeSlider,
    SliderControlTemplate,
  },
  props: {
    level: {
      type: [Number, Array],
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
