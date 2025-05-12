import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify"; // Import the Vuetify plugin

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify, // Use the imported vuetify instance
  render: (h) => h(App),
}).$mount("#app");
