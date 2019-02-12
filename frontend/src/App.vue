<template>
  <v-app class="app-container">
    <HeaterControlPanel />
    <Test>
      <NoUiSlider />
    </Test>
  </v-app>
</template>

<script>
import HeaterControlPanel from './components/HeaterControlPanel';
import NoUiSlider from './components/NoUiSlider';
import Test from './components/Test';

export default {
  name: 'App',
  components: {
    NoUiSlider,
    HeaterControlPanel,
    Test,
  },
};
</script>

<style>
.app-container {
  padding-top: 60px;
}
</style>
