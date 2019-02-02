<template>
  <div class="slider-control">
    <div class="slider-control-slider">
      <slot />
    </div>
    <div class="slider-control-level">
      {{ levelLabel }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderControlTemplate',
  props: {
    levelLabel: {
      type: String,
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
