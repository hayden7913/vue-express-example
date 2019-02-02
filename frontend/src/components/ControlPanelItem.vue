<template>
  <div class="cp-item">
    <div class="cp-item-col cp-item-col-left">
      <div class="cp-item-label">
        {{ label }}
      </div>
    </div>
    <div class="cp-item-col cp-item-col-right">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ControlPanelItem',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.cp-item {
  display: flex;
  padding: 10px 20px;
  margin-bottom: 10px;
  align-items: center;
  height: 50px;
}

.cp-item-col-right {
  display: flex;
  flex-direction: row;
  margin-left: auto;
}
</style>
