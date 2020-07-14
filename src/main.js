import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import alertify from "alertifyjs/build/alertify.min.js";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/themes/default.min.css";

Vue.config.productionTip = false;

new Vue({
  alertify,
  store,
  render: (h) => h(App),
}).$mount("#app");
