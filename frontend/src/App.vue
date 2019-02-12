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

// TODO: remove this code
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
}
</style>
