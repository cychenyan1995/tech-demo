import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import vueLazyload from "vue-lazyload";

Vue.config.productionTip = false;
Vue.use(vueLazyload);
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
