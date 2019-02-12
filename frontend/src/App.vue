<template>
  <v-app class="app-container">
    <!-- TODO: remove this code  -->
    <!-- <Test>
      <BaseSliderNoUi />
    </Test> -->
    <HeaterControlPanel />
  </v-app>
</template>

<script>
import HeaterControlPanel from './components/HeaterControlPanel';
import BaseSliderNoUi from './components/BaseSliderNoUi';
import Test from './components/Test';

export default {
  name: 'App',
  components: {
    BaseSliderNoUi,
    HeaterControlPanel,
    Test,
  },
};
</script>

<style>
.app-container {
  padding-top: 60px;
  padding-left: 20vw;
}
</style>
