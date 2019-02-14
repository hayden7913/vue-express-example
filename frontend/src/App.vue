<template>
  <v-app class="app-container">
    <div v-if="hasFetched">
      <HeaterControlPanel />
      <Test>
        <NoUiSlider />
      </Test>
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import { FETCH_ENVIRONMENT_STATE } from './constants/ActionTypes';
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
  computed: {
    ...mapGetters(['hasFetched']),
  },
  created() {
    this.$store.dispatch(FETCH_ENVIRONMENT_STATE);
  },
};
</script>

<style>
.app-container {
  padding-top: 60px;
}
</style>
