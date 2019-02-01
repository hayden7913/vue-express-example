<template>
  <div class="slider-control">
    <div class="slider-control-slider">
      <BaseSlider
        v-model="percent"
        v-bind:level="level"
      />
    </div>
    <div class="slider-control-level">
      {{ level + '%' }}
    </div>
  </div>
</template>

<script>
import BaseSlider from './BaseSlider';

export default {
  name: 'SliderControl',
  components: {
    BaseSlider,
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
.slider-control {
  display: flex;
  align-items: center;
}

.slider-control-level {
  margin-left: 20px;
}

</style>
