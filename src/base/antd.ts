import { app } from "@/base/index";
import {
  Button,
  Col,
  Layout,
  Menu,
  message,
  Row,
  Slider,
} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
app.use(Button);
app.use(Row);
app.use(Col);
app.use(Menu);
app.use(Layout);
app.use(Slider);
app.config.globalProperties.$message = message;
