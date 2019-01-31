<template>
  <div class="app-container">
    <SwitchControl />
  </div>
</template>

<script>
import SwitchControl from './components/SwitchControl'

export default {
  name: 'App',
  components: {
    SwitchControl
  },
}
</script>

<style>
.app-container {
  margin-top: 60px;
}
</style>
