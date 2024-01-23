import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "@/components/App.vue";
import "@/styles/vars.css";
import "@/styles/main.css";
import "@/helpers/icons";

/**
 * Entry point
 */

createApp(App).component("font-icon", FontAwesomeIcon).mount("#app");
