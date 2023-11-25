<template>
  <button v-if="!isLogedIn" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
  computed: {
    isLogedIn(){
        return this.$store.getters.getLoginState;
    }
  }
};
</script>