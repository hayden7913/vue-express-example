<template>
  <div class="control-panel-wrapper">
    <div class="control-panel-label">
      {{ label }}
    </div>
    <slot class="control-panel-main" />
  </div>
</template>

<script>
export default {
  name: 'ControlPanel',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.control-panel-wrapper {
  max-width: 600px;
}
</style>
