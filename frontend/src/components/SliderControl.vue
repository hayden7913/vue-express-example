<!-- Returns a Range Slider if an array is supplied for the level prop  -->
<!-- Returns a normal slider if a scalar is supplied-->
<template>
  <div class="slider-control">
    <div class="slider-control-slider">
      <BaseRangeSlider
        v-if="Array.isArray(level)"
        v-bind:levels="level"
        v-bind:color="color"
        v-on:slider-move="updatePosition"
      />
      <BaseSlider
        v-else
        v-bind:value="level"
        v-bind:color="color"
        v-on:slider-move="updatePosition"
      />
    </div>
    <div class="slider-control-level">
      {{ levelLabel }}
    </div>
  </div>
</template>

<script>
import  BaseSlider from './BaseSlider';
import  BaseRangeSlider from './BaseRangeSlider';

export default {
  name: 'SliderControl',
  components: {
    BaseSlider,
    BaseRangeSlider,
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
      color: 'grey',
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

.slider-control-slider {
  width: 300px;
}

.slider-control-level {
  margin-left: 20px;
  width: 110px;
  text-align: center;
}
</style>
