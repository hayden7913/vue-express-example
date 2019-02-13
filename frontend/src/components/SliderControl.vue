<!-- Returns a Range Slider if an array is supplied for the level prop  -->
<!-- Returns a normal slider if a scalar is supplid to the level prop -->
<template>
  <div class="slider-control">
    <div class="slider-control-slider">
      <BaseRangeSlider
        v-if="Array.isArray(level)"
        v-bind:levels="level"
        v-bind:color="color"
        v-bind:handle-input="handleInput"
      />
      <BaseSlider
        v-else
        v-bind:color="color"
        v-bind:handle-input="handleInput"
        v-bind:position.sync="position"
      />
    </div>
    <div class="slider-control-label">
      {{ position }}
    </div>
  </div>
</template>

<script>
import BaseSlider from './BaseSlider';
import BaseRangeSlider from './BaseRangeSlider';
import { COLOR_PRIMARY } from '../constants/StyleConstants';

export default {
  name: 'SliderControl',
  components: {
    BaseSlider,
    BaseRangeSlider,
  },
  props: {
    level: {
      type: [Number, Array],
      default: 0,
    },
    label: {
      type: String,
      default: '...',
    },
    handleInput: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      position: this.level,
    };
  },
  created() {
    this.color = COLOR_PRIMARY;
  },
  methods: {
    emitSliderPosition(pos) {
      this.sliderPosition = pos;
      this.$emit('slider-move', pos);
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

.slider-control-label {
  margin-left: 20px;
  width: 110px;
  text-align: center;
}
</style>
