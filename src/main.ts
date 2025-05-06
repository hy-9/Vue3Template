import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/output.css"; // 全局引入样式文件

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
