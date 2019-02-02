<template>
  <v-app class="app-container">
    <HeaterControlPanel />
  </v-app>
</template>

<script>
import HeaterControlPanel from './components/HeaterControlPanel';

export default {
  name: 'App',
  components: {
    HeaterControlPanel,
  },
};
</script>

<style>
.app-container {
  padding-top: 60px;
  padding-left: 20vw;
}
</style>
