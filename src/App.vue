<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<template>
  <v-app>
    <v-main class="main-background">
      <Navbar />
      <v-container class="pa-4 pa-md-10">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
.main-background {
  background-color: #eceffad4;
  min-height: 100vh;
}
</style>
