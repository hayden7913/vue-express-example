<template>
  <div class="switch-control">
    <div class="switch-control-col switch-control-col-left">
      <div class="switch-control-label">Power</div>
    </div>
    <div class="switch-control-col switch-control-col-right">
      <div class="switch control-message">OFF</div>
      <div class="switch-control-switch">switch</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchControl',
};

</script>

<style>
.switch-control {
  margin-left: 30%;
  display: flex;
  width: 400px;
  padding: 10px;
  /* border: 1px solid #000; */
}

.switch-control div {
  /* border: 1px solid gray; */
}

.switch-control-col-right {
  display: flex;
  flex-direction: row;
  margin-left: auto;
}

.switch-control-switch {
  margin-left: 10px;
}
</style>
