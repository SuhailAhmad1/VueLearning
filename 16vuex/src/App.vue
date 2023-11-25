<template>
  <base-container v-if="isLogedIn" title="Vuex">
    <the-counter></the-counter>
    <button @click="addOne">Add 1 using mutations</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    UserAuth,
  },
  methods: {
    addOne() {
      this.$store.commit('increment');
    },
  },
  computed: {
    isLogedIn() {
      return this.$store.getters.getLoginState;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>