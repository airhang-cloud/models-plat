import { app } from "@/base";
import router from "./router";
import store from "./store";

import "@/directives/index";
import "@/base/antd";

app.use(store).use(router).mount("#app");
