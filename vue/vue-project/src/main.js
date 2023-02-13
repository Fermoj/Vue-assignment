import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import store from './store'


//importera vuex hit också
import App from "./App.vue";
import router from "./router";
import "./assets/base.css";

const app = createApp(App);
app.use(store)

app.use(router);
app.mount("#app");
app.use(bootstrap);
