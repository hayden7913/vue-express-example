<template>
  <div class="power-control">
    <div
      class="power-control-state"
      v-bind:class="[powerOn ? 'is-on' : 'is-off']"
    >
      <span
        v-if="powerOn"
      >
        ON
      </span>
      <span v-else>
        OFF
      </span>
    </div>
    <div class="power-control-switch">
      <!-- refactor to use on  -->
      <BaseSwitch
        v-bind:switch-on="powerOn"
        v-on:handle-change="$emit('toggle-power')"
      />
    </div>
  </div>
</template>

<script>
import BaseSwitch from './BaseSwitch';
// TODO: refactor  name to switch control
export default {
  name: 'PowerControl',
  components: {
    BaseSwitch,
  },
  props: {
    powerOn: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    sayHi() {
      console.log('hello');
    },
  },
};
</script>

<style>
.power-control {
  display: flex;
  align-items: center;
}

.power-control-switch {
  margin-left: 10px;
}

.power-control-state {
  width: 30px;
}
/* TODO: refactor colors with vars */
/* TODO: use nesting */
.power-control-state.is-on {
  color: green;
}

.power-control-state.is-off {
  color: grey;
}

</style>
