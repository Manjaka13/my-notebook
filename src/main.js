import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "@/store/tasks";
import App from "@/components/App.vue";
import "@/styles/vars.css";
import "@/styles/main.css";
import "@/helpers/icons";

/**
 * Entry point
 */

createApp(App).use(store).component("font-icon", FontAwesomeIcon).mount("#app");
